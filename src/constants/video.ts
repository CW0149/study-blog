import { BCourse, BMedia } from './types';

export const VIDEO_COURSES: BCourse[] = [
  {
    bvid: 'BV1ob411J7WC',
    title: '中国经济12讲 林毅夫',
    cover:
      '//i0.hdslb.com/bfs/archive/66593a6e3fd3e99f060979643bc7efb990f7ba4c.jpg',
    noteFolderName: 'china-economics-linyifu',
  },
  {
    bvid: 'BV1GK4y1S7FF',
    title: '中国经济专题 徐高',
    cover:
      '//i1.hdslb.com/bfs/archive/766f540b84cb010470ab96ac6d2659eb7e9056d1.jpg',
  },
  {
    bvid: 'BV19i4y1M79G',
    title: '新结构经济学 Part1',
    cover:
      '//i1.hdslb.com/bfs/archive/151d7bd0b6e07e8d6fb4f679cfc40471e317832c.png',
    // noteFolderName: '新结构经济学1',
  },
  {
    bvid: 'BV1Ck4y1y7Pr',
    title: '新结构经济学 Part2',
    cover:
      '//i1.hdslb.com/bfs/archive/151d7bd0b6e07e8d6fb4f679cfc40471e317832c.png',
    // noteFolderName: '新结构经济学2',
  },
  {
    bvid: 'BV1Nb4y1d7AB',
    title: '经济学原理',
    cover:
      '//i2.hdslb.com/bfs/archive/9965136ef6c6dc89786c48dfda5c88cb65706250.jpg',
  },
  {
    bvid: 'BV173411e7nm',
    title: '微观经济学',
    cover:
      '//i2.hdslb.com/bfs/archive/6852b5de43d8a6f23bc8ce246b8352dd7cb64313.jpg',
  },
  {
    bvid: 'BV1pW41117rs',
    title: '高级计量经济',
    cover:
      '//i0.hdslb.com/bfs/archive/224167951c0ac00f34708b3107a04a0ceed7d253.jpg',
  },
  {
    bvid: 'BV1uU4y1a7zc',
    title: '国际经济学',
    cover:
      '//i2.hdslb.com/bfs/archive/0d512a2ca6b2ebfdfe2cace6966a2292b6b69b3f.jpg',
  },
  {
    bvid: 'BV1wW411p73z',
    title: '产业经济学',
    cover:
      '//i2.hdslb.com/bfs/archive/3cff9ca4661b33fce22b4982a534263a17dfb213.png',
  },
  {
    bvid: 'BV1k3411J7xB',
    title: '财政学',
    cover:
      '//i1.hdslb.com/bfs/archive/09b0b980d787310114e81ebfeebb257468aaffc5.jpg',
  },
  {
    bvid: 'BV1bK411L7FR',
    title: '公司金融',
    cover:
      '//i2.hdslb.com/bfs/archive/14a308f46c6e0a348aee34f090b8d66f3971d35a.jpg',
  },
  {
    bvid: 'BV1H5411P74w',
    title: '证券投资学',
    cover:
      '//i2.hdslb.com/bfs/archive/3cce8d70c4065396b195e0d4def5a8933c5758ed.jpg',
  },
  {
    bvid: 'BV1c541157Te',
    title: '货币银行学',
    cover:
      '//i2.hdslb.com/bfs/archive/632036014ed7535b426735817d078c0a79c0feb0.jpg',
  },
  {
    bvid: 'BV1LU4y1h7Nb',
    title: '高级计量经济（英）',
    cover:
      '//i1.hdslb.com/bfs/archive/ba6a13bfdbe241dd0f619f1a729f8bdfe2c98b82.png',
  },
];

export const COLLECTIONS: BCourse[] = [
  {
    bvid: 'BV1vA411W7fY',
    title: '冥想正念指南',
    cover:
      '//i2.hdslb.com/bfs/archive/eb413685a39b1554294a974132b58038ef456196.jpg',
  },
  {
    bvid: 'BV1Rt4y1C7uy',
    title: '世界上最非凡的住宅',
    cover:
      '//i2.hdslb.com/bfs/archive/6cd91a96d0ea8c9ead13c81803768d0d870bc73e.jpg',
  },
  {
    bvid: 'BV1KT41137GV',
    title: '瑞·达利欧合集',
    cover:
      '//i0.hdslb.com/bfs/archive/8a8bdc01f7c99b6fb289724fb5cdd885efea81e4.jpg',
  },
  {
    bvid: 'BV1qK4y1p7wG',
    title: '巴菲特合集',
    cover:
      '//i0.hdslb.com/bfs/archive/d0f84b4906edd5b8132b80f6e7c968bc2c821ff2.jpg',
  },
  {
    bvid: 'BV1qW4y1r7KT',
    title: '华尔街',
    cover:
      '//i2.hdslb.com/bfs/archive/bc6174b9358e702e703f89c30fcae2576105a3b2.png',
  },
];

export const MEDIA_LIST: BMedia[] = [
  {
    mid: '489162014',
    title: 'Sadhguru',
    cover:
      '//i1.hdslb.com/bfs/archive/5ada48cc1a9872994873f06b45a062893843dc1a.png',
  },
];

export const MEDIAS: Record<string, BMedia> = {
  Sadhguru: {
    mid: '489162014',
    title: 'Sadhguru',
    cover:
      '//i1.hdslb.com/bfs/archive/5ada48cc1a9872994873f06b45a062893843dc1a.png',
  },
};

export const MEDIA_ID_TO_MEDIA = Object.keys(MEDIAS).reduce((res, key) => {
  res[MEDIAS[key].mid] = MEDIAS[key];
  return res;
}, {} as Record<string, BMedia>);
