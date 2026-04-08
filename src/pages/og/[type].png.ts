import type { APIRoute } from 'astro';
import satori from 'satori';
import { initWasm, Resvg } from '@resvg/resvg-wasm';
import { resultTypes } from '../../data/resultTypes';

let wasmInitialized = false;

export const GET: APIRoute = async ({ params, url }) => {
  const { type } = params;
  const modeParam = url.searchParams.get('mode');
  const isChiku = modeParam === 'chiku';

  const resultType = resultTypes.find((r) => r.id === type);
  if (!resultType) {
    return new Response('Not Found', { status: 404 });
  }

  const data = isChiku ? resultType.chikuchiku : resultType.pokapoka;
  const otherData = isChiku ? resultType.pokapoka : resultType.chikuchiku;

  // Noto Sans JP フォントを取得
  const fontRes = await fetch(
    'https://fonts.gstatic.com/s/notosansjp/v53/KFRmCnaiYGlNN50FEj1p6i08Gdiz0qGxkTA.woff2'
  );
  const fontData = await fontRes.arrayBuffer();

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: isChiku
            ? 'linear-gradient(135deg, #374151, #1f2937)'
            : 'linear-gradient(135deg, #fce7f3, #fed7aa)',
          fontFamily: '"Noto Sans JP", sans-serif',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                fontSize: '24px',
                color: '#9ca3af',
                marginBottom: '8px',
              },
              children: isChiku ? '🌵 チクチク心理テスト' : '🌸 チクチク心理テスト',
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: '16px',
                color: isChiku ? '#6b7280' : '#9ca3af',
                marginBottom: '24px',
              },
              children: 'あなたのタイプは…',
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: '56px',
                fontWeight: 900,
                color: isChiku ? '#f3f4f6' : '#db2777',
                marginBottom: '16px',
                textAlign: 'center' as const,
                padding: '0 40px',
              },
              children: data.title,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: '20px',
                color: isChiku ? '#9ca3af' : '#6b7280',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              },
              children: isChiku
                ? `（ぽかぽか版：${otherData.title}）`
                : `（チクチク版：${otherData.title}）`,
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Noto Sans JP',
          data: fontData,
          weight: 700,
          style: 'normal' as const,
        },
      ],
    }
  );

  // WASM初期化（一度だけ）
  if (!wasmInitialized) {
    const wasmModule = await import('@resvg/resvg-wasm/index_bg.wasm');
    await initWasm(wasmModule.default);
    wasmInitialized = true;
  }

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
