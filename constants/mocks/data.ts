import type { StaticImageData } from "next/image";
import aoDiChoiNam from "../../public/static/img/40bd67a3c38e2334249b3998c645e97a.jpeg";
import aoVest from "../../public/static/img/a2c1c1f6d97d394557e17c698ed3ba1d_tn.jpeg";
import doNgu from "../../public/static/img/bo-ngu-lua-pijama-nam-nu-couple-cuc-xinh.jpg";
import doDoi from "../../public/static/img/ao-doi-AD0379-1.jpg";
import aoHocSinh from "../../public/static/img/e09e027db069f490f8b70738f2dc07a3.jpeg";
import quanAoNu from "../../public/static/img/images.jpeg";
import vayNu from "../../public/static/img/Shop-quan-ao-nu-quan-1.jpg";
export const phucTrang = {
  aoDiChoiNam,
  aoVest,
  doNgu,
  doDoi,
  aoHocSinh,
  quanAoNu,
  vayNu,
};
export interface TypeCart {
  id: string;
  image: StaticImageData;
  name: string;
  category?: string;
  unitPrice: number;
}
export const listCart: Array<TypeCart> = [
  {
    id: "111",
    image: phucTrang.aoDiChoiNam,
    name: "Sản phẩm 1",
    category: "Áo đi chơi nam",
    unitPrice: 1250000,
  },
  {
    id: "112",
    image: phucTrang.aoVest,
    category: "Bộ đồ vest nam cao cấp",
    name: "Sản phẩm 2",
    unitPrice: 1250000,
  },
  {
    id: "113",
    image: phucTrang.doNgu,
    name: "Sản phẩm 3",
    category: "Đồ ngủ đôi nam, nữ",
    unitPrice: 1250000,
  },
  {
    id: "114",
    image: phucTrang.doDoi,
    name: "Sản phẩm 4",
    category: "Áo đôi nam, nữ",
    unitPrice: 1250000,
  },
  {
    id: "115",
    image: phucTrang.aoHocSinh,
    name: "Sản phẩm 5",
    category: "Áo đi sơ mi, quần short nam",
    unitPrice: 1250000,
  },
  {
    id: "116",
    image: phucTrang.quanAoNu,
    name: "Sản phẩm 6",
    category: "Áo đi sơ mi nữ",
    unitPrice: 1250000,
  },
  {
    id: "117",
    image: phucTrang.vayNu,
    name: "Sản phẩm 7",
    category: "Áo hở vai váy ngắn nữ",
    unitPrice: 1250000,
  },
];
