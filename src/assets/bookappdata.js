import { Home, Mail } from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

import B20257 from "../assets/covers/B20257.jpg"
import B20258 from "../assets/covers/B20258.png"
import B20259 from "../assets/covers/B20259.png"
import B202510 from "../assets/covers/B202510.jpg"
import B202511 from "../assets/covers/B202511.jpg"

// Navbar section
export const navItems = [
  { name: "Trang chủ", path: "/", icon: Home, color: "from-[#D7A61E] to-[#7C8C03]" },
  { name: "Liên hệ", path: "/contact", icon: Mail, color: "from-[#D7A61E] to-[#7C8C03]" }
]

// Feature section
export const carouselBooks = [
  {
    id: "B20257",
    title: "ĐỘC CHIẾM SỦNG ÁI",
    category: "Hài hước, Cổ đại, Hệ thống, Ngọt, Sủng",
    coverImage: B20257,
  },
  {
    id: "B20258",
    title: "MỆNH TẠI NHÂN VI",
    category: "Cổ đại, Cung Đấu, Vả mặt, Trọng sinh, Xuyên sách",
    coverImage: B20258,
  },
  {
    id: "B20259",
    title: "THÁI TỬ PHI LÀ TA, PHÒ MÃ CŨNG LÀ TA",
    category: "Hài hước, Cổ đại, Ngọt, Sủng",
    coverImage: B20259,
  },
  {
    id: "B202510",
    title: "CHÚNG TA CỦA NHỮNG NĂM VỀ SAU",
    category: "Chữa lành, Học đường, Ngọt",
    coverImage: B202510,
  },
  {
    id: "B202511",
    title: "THIÊN HẠ LÀ CỦA CHÀNG, CÒN CHÀNG LÀ CỦA TA",
    category: "Cổ đại, Cung Đấu, Cưới trước yêu sau, Sủng, Ngọt",
    coverImage: B202511,
  },
];

// Loading books section
export const bgColors = [
  "from-[#fce3ec] to-[#ffe8d4]",
  "from-[#e2f0cb] to-[#ffe6e6]",
  "from-[#d0e6f6] to-[#f3e5f5]",
  "from-[#fff1c1] to-[#ffd3b4]",
  "from-[#e1f7d5] to-[#ffccbc]",
  "from-[#f0f4c3] to-[#b2dfdb]",
  "from-[#ede7f6] to-[#e1bee7]",
  "from-[#dcedc8] to-[#fff9c4]",
]

// Footer section
export const socialLinks = [
  { Icon: FaFacebook, url: "https://www.facebook.com/profile.php?id=100068254200967" },
  { Icon: FaTwitter, url: "/" },
  { Icon: FaInstagram, url: "/" },
  { Icon: FaYoutube, url: "/" },
]

export const quickLinks = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Books", url: "/books" },
  { title: "Contact", url: "/contact" },
]