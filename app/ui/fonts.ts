import { Inter, Lusitana } from 'next/font/google';
//  subsets子集是指创建字体 “子集”的做法——即包含自定义（通常有限）字形集合的文件。
// latin,拉丁语
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});