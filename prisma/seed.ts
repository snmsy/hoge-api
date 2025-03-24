import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 47都道府県のデータ
const prefectureData = [
  { id: 1, code: '01', name: '北海道' },
  { id: 2, code: '02', name: '青森県' },
  { id: 3, code: '03', name: '岩手県' },
  { id: 4, code: '04', name: '宮城県' },
  { id: 5, code: '05', name: '秋田県' },
  { id: 6, code: '06', name: '山形県' },
  { id: 7, code: '07', name: '福島県' },
  { id: 8, code: '08', name: '茨城県' },
  { id: 9, code: '09', name: '栃木県' },
  { id: 10, code: '10', name: '群馬県' },
  { id: 11, code: '11', name: '埼玉県' },
  { id: 12, code: '12', name: '千葉県' },
  { id: 13, code: '13', name: '東京都' },
  { id: 14, code: '14', name: '神奈川県' },
  { id: 15, code: '15', name: '新潟県' },
  { id: 16, code: '16', name: '富山県' },
  { id: 17, code: '17', name: '石川県' },
  { id: 18, code: '18', name: '福井県' },
  { id: 19, code: '19', name: '山梨県' },
  { id: 20, code: '20', name: '長野県' },
  { id: 21, code: '21', name: '岐阜県' },
  { id: 22, code: '22', name: '静岡県' },
  { id: 23, code: '23', name: '愛知県' },
  { id: 24, code: '24', name: '三重県' },
  { id: 25, code: '25', name: '滋賀県' },
  { id: 26, code: '26', name: '京都府' },
  { id: 27, code: '27', name: '大阪府' },
  { id: 28, code: '28', name: '兵庫県' },
  { id: 29, code: '29', name: '奈良県' },
  { id: 30, code: '30', name: '和歌山県' },
  { id: 31, code: '31', name: '鳥取県' },
  { id: 32, code: '32', name: '島根県' },
  { id: 33, code: '33', name: '岡山県' },
  { id: 34, code: '34', name: '広島県' },
  { id: 35, code: '35', name: '山口県' },
  { id: 36, code: '36', name: '徳島県' },
  { id: 37, code: '37', name: '香川県' },
  { id: 38, code: '38', name: '愛媛県' },
  { id: 39, code: '39', name: '高知県' },
  { id: 40, code: '40', name: '福岡県' },
  { id: 41, code: '41', name: '佐賀県' },
  { id: 42, code: '42', name: '長崎県' },
  { id: 43, code: '43', name: '熊本県' },
  { id: 44, code: '44', name: '大分県' },
  { id: 45, code: '45', name: '宮崎県' },
  { id: 46, code: '46', name: '鹿児島県' },
  { id: 47, code: '47', name: '沖縄県' },
];

async function main() {
  console.log('Start seeding...');

  // 既存のデータを削除
  await prisma.prefecture.deleteMany();

  // 都道府県データを挿入
  for (const prefecture of prefectureData) {
    await prisma.prefecture.create({
      data: prefecture,
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });