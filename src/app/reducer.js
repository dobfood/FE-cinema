import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import axios from "axios";
import { useEffect } from "react";

const time = [];
const initValue = {
  product: [
    {
      id: 1,
      name: "BLACK ADAM",
      engname: "BLACK ADAM",
      category: "Hành Động",
      author: "Warner Bros",
      cast: " Dwayne Johnson, Pierce Brosnan, Sarah Shahi",
      date: "20/10/2022",
      imageSrc:
        "https://cdn.galaxycine.vn/media/2022/9/26/900wx1350h_1664177555434.jpg",
      description:
        "Black Adam được các fan truyện tranh biết đến nhiều nhất trong vai trò kẻ thù - đối thủ lớn nhất của siêu anh hùng Shazam của vũ trụ truyện tranh và điện ảnh DC. Theo nhiều phiên bản truyện, nếu như người được chọn hô to câu thần chú “Shazam!” sẽ lập tức nhận được sức mạnh của phù thủy cổ xưa, thì câu thần chú này sẽ giúp cho Black Adam có được sức mạnh của 6 vị thần Ai Cập cổ đại gồm: Shu (Thần Gió với sức mạnh bất khả chiến bại), Heru (Vị thần của bầu trời, chiến tranh và săn bắn với siêu tốc độ), Amon (Thần bảo hộ các Pharaoh ban cho thể lực dồi dào), Zehuti (Vị thần của trí tuệ vô song), Aton (cho Black Adam sức mạnh của sấm sét) and Mehen (Thần Rắn với sức mạnh của lòng can đảm).  Phim mới Black Adam khởi chiếu 21.10.2022 tại các rạp chiếu phim toàn quốc.",
      price: "130.000",
      Age: "C13",
      cinema: [
        {
          name: " Rạp Kim Đông",
          time: ["10:30", "11: 00", "13: 00"],
        },
        { name: "Rạp Nguyễn Du", time: ["11:30", "15: 00", "20: 00"] },
      ],
    },
    {
      id: 2,
      name: "CÔ GÁI TỪ QUÁ KHƯ",
      engname: "GIRL FROM THE PAST",
      category: "Phim ma",
      author: "Việt Nam",
      cast: "Diễn viên:  Ninh Dương Lan Ngọc, Kaity Nguyễn, NSND Lê Khanh, Hữu Châu, Lãnh Thanh, Lê Xuân Tiền",
      date: "Ngày khởi chiếu:  20/10/2022",
      imageSrc:
        "https://cdn.galaxycine.vn/media/2022/9/30/wweww_1664505396042.jpg",
      description:
        " Đang tất bật chuẩn bị cho đám cưới triệu đô cùng chàng Jack điển trai, đại mỹ nhân showbiz Ms. Q/Hoàng Quyên (Ninh Dương Lan Ngọc) bất ngờ mất tích một cách bí ẩn ngay sau khi gặp lại Quỳnh Yên (Kaity Nguyễn), một người bạn đã mất liên lạc từ 15 năm trước. Ngay lập tức, các rắc rối liên tục ập đến, kéo theo những bí mật đen tối của cả hai dần bị lột trần. Ai là kẻ thủ ác? Ai mới là nạn nhân?  P/S: Bất kể cô ta có nói gì thì cũng nên nhớ: Đừng tin lời cô ta nói! Phim mới Cô Gái Từ Quá Khứ ra mắt tại các rạp chiếu phim từ 13.10.2022 Xem thêm tại: https://www.galaxycine.vn/dat-ve/co-gai-tu-qua-khu",
      price: "130.000",
      Age: "C18",

      cinema: [
        {
          name: " Rạp Kim Đông",
          time: ["14:30", "17: 00", "21: 00"],
        },
        { name: "Rạp Nguyễn Du", time: ["11:30", "15: 00", "20: 00"] },
      ],
    },
    {
      id: 3,
      name: "6/45",
      engname: "6/45",
      category: "Phim hài",
      author: "Korea",
      cast: " Lee Yi Kyung, Go Kyung Pyo",
      date: "21/9/2022",
      imageSrc:
        "https://cdn.galaxycine.vn/media/2022/9/14/1200wx1800h_1663128392583.jpg",
      description:
        "Đang tất bật chuẩn bị cho đám cưới triệu đô cùng chàng Jack điển trai, đại mỹ nhân showbiz Ms. Q/Hoàng Quyên (Ninh Dương Lan Ngọc) bất ngờ mất tích một cách bí ẩn ngay sau khi gặp lại Quỳnh Yên (Kaity Nguyễn), một người bạn đã mất liên lạc từ 15 năm trước. Ngay lập tức, các rắc rối liên tục ập đến, kéo theo những bí mật đen tối của cả hai dần bị lột trần. Ai là kẻ thủ ác? Ai mới là nạn nhân?  P/S: Bất kể cô ta có nói gì thì cũng nên nhớ: Đừng tin lời cô ta nói! Phim mới Cô Gái Từ Quá Khứ ra mắt tại các rạp chiếu phim từ 13.10.2022 ",
      price: "130.000",
      Age: "C13",
      cinema: [
        {
          name: " Rạp Kim Đông",
          time: ["10:30", "11: 00", "13: 00"],
        },
        { name: "Rạp Nguyễn Du", time: ["11:30", "15: 00", "20: 00"] },
      ],
    },
    {
      id: 4,
      name: "NỮ VƯƠNG HUYỀN THOẠI",
      engname: "Gina Price-Bythewood",
      category: "Phim Kinh tởm",
      author: "Gina Price-Bythewood",
      cast: "Viola Davis, Thuso Mbedu, Lashana Lynch, Sheila Atim, Hero Fiennes Tiffin, John Boyega…",
      date: "14/10/2022",
      imageSrc:
        "https://cdn.galaxycine.vn/media/2022/10/8/1200x1800_1665216609067.jpg",
      description:
        "Lấy cảm hứng từ những sự kiện có thật trong lịch sử đã xảy ra ở Vương quốc Dahomey - một trong những quốc gia hùng mạnh nhất của châu Phi thế kỷ 18 và 19. “Nữ Vương Huyền Thoại” xoay quanh nhóm chiến binh toàn nữ Agojie với nhiệm vụ bảo vệ vương quốc và đức vua. Vị tướng Nanisca huấn luyện một thế hệ chiến binh mới để chiến đấu chống lại kẻ thù muốn phá hủy lối sống của họ. Phim mới Nữ Vương Huyền Thoại ra mắt tại các rạp chiếu phim từ 12.10.2022.",
      price: "130.000",
      Age: "C18",
      cinema: [
        {
          name: " Rạp Kim Đồng",
          time: ["10:30", "11: 00", "13: 00"],
        },
        { name: "Rạp Nguyễn Du", time: ["11:30", "15: 00", "20: 00"] },
      ],
    },
    {
      id: 5,
      name: "Môn Phái Võ Mèo: Huyền Thoại Một Chú Chó",
      engname: "PAW OF FURY: THE LEGEND OF HANK",
      category: "Hoạt Hình, Hành Động, Hài",
      author: "Nickelodeon Movies",
      cast: "Michael Cera, Samuel L. Jackson, Ricky Gervais, Dương Tử Quỳnh",
      date: "31/8/2022",
      imageSrc:
        "https://cdn.galaxycine.vn/media/2022/7/29/1200x1800_1659069868525.jpg",
      description:
        "Bộ phim kể về chú chó tên Hank ước mơ trở thành samurai. Hank tới vùng đất của những chú mèo samurai với mong muốn cũng được trở thành samurai huyền thoại. Không may, vì âm mưu của Ika Chu, Hank bị đưa đến ngôi làng Kakamucho - một ngôi làng toàn mèo. Dĩ nhiên, mèo thì không thích chó. Hành trình để chinh phục sự yêu quý của làng Kakamucho và đạt được ước mơ của Hank từ đó bắt đầu. Phim mới Môn Phái Võ Mèo: Huyền Thoại Một Chú Chó khởi chiếu vào 01.09.2022 tại các rạp chiếu phim toàn quốc",
      price: "130.000",
      Age: "C13",
    },
    {
      id: 6,
      name: "NGƯỢC DÒNG THỜI GIAN ĐỂ YÊU ANH",
      engname: "LOVE DESTINY THE MOVIE",
      category: "  Hài, Lãng Mạn, Lịch Sử",
      author: "GDH 559",
      cast: "Ranee Campen, Thanavat Vatthanaputi",
      date: "9/9/2022",
      imageSrc:
        "https://cdn.galaxycine.vn/media/2022/8/30/1200wx1800h_1661793911854.jpg",
      description:
        "Gaysorn (Ranee Campen) – tiểu thư sống ở thời Rattanakosin chính là kiếp sau của Karaket ở triều đại Ayutthaya. Có lẽ bởi vậy mà Gaysorn đã chiếm trọn trái tim của Bhop (Thanavat Vatthanaputi) – cũng là hậu duệ của Dej – ngay từ lần đầu gặp mặt. Chàng kỹ sư tài năng đã luôn mơ về một người con gái có gương mặt giống Gaysorn trong suốt 10 năm qua, và nghĩ rằng cô chính là tri kỉ mà mình đang tìm kiếm. Phim mới Ngược Dòng Thời Gian Để Yêu Anh ra mắt tại các rạp chiếu phim từ 09.09.2022",
      price: "130.000",
      Age: "C16",
    },
    {
      id: 7,
      name: "MƯỜI: LỜI NGUYỀN TRỞ LẠI",
      engname: "10",
      category: "Phim Ma",
      author: "Silver Moonlight Entertainment",
      cast: "Chi Pu, Hồng Ánh, Anh Thư, Bình Minh, Rima Thanh Vy, Đinh Y Nhung",
      date: "  30/9/2022",
      imageSrc:
        "https://cdn.galaxycine.vn/media/2022/8/24/300wx450h_1661316470918.jpg",
      description:
        "Mười: Lời Nguyền Trở Lại lấy bối cảnh ở ngôi biệt thự cổ. Tại đây, cô gái trẻ tên Linh (Chi Pu) bị cuốn theo hàng loạt hiện tượng kì dị: chiếc bóng ma gieo thẳng xuống sân, ánh mắt đáng sợ, bé gái thoăn thoắt ẩn hiện và… căn phòng chứa bức tranh bí hiểm của Mười.   Ai là kẻ bị nguyền rủa, ai là người đáng hận, liệu kẻ thứ ba có chịu trừng phạt thích đáng?   Phim mới Mười: Lời Nguyền Trở Lại ra mắt tại các rạp chiếu phim từ 30.09.2022",
      price: "130.000",
      Age: "C16",
    },
    {
      id: 8,
      name: "CƯỜI",
      engname: "SMILE",
      category: "Kinh Dị",
      author: "Temple Hill Entertainment",
      cast: "VĂN KIỆT",
      date: "7/10/2022",
      imageSrc:
        "https://cdn.galaxycine.vn/media/2022/9/5/1200wx1800h_1662347282801.jpg",
      description:
        " Cười được chuyển thể từ bộ phim kinh dị ngắn Laura Hasnt Slept. Bộ phim dài 11 phút kể về người phụ nữ tên Laura, do Caitlin Stasey (Reign) thủ vai, người đã tìm kiếm sự giúp đỡ từ bác sĩ trị liệu bởi cô liên tục mơ đến một cơn ác mộng duy nhất. Bộ phim đã nhận được sự hoan nghênh của giới phê bình và thậm chí còn giành được giải thưởng Midnight Short của Liên hoan phim SXSW. Và lần này, Stasey sẽ tiếp tục trở lại trong bộ phim này phiên bản điện ảnh. Sau khi chứng kiến ​​một sự việc đau thương nhưng vô cùng kỳ lạ liên quan đến một bệnh nhân, những điều đáng sợ khó giải thích đã lần lượt xảy ra với Tiến sĩ Rose Cotter (Sosie Bacon). Khi nỗi kinh hoàng bắt đầu xâm chiếm, bao trùm lấy cuộc sống của cô, Rose sẽ phải đối mặt với những rắc rối ở quá khứ để tìm cách tồn tại và thoát khỏi thực tại mới vô cùng kinh hoàng này. Phim mới Cười ra mắt tại các rạp chiếu phim từ 07.10.2022.",
      price: "130.000",
      Age: "C16",
    },
    {
      id: 9,
      name: "NHÀ CÓ NĂM NÀNG DÂU",
      engname: "GOTOUBUN NO HANAYOME",
      category: "HOẠT HÌNH",
      author: "Pony Canyon",
      cast: "Matsuoka Yoshitsugu, Hanazawa Kana",
      date: "7/10/2022",
      imageSrc:
        "https://cdn.galaxycine.vn/media/2022/10/4/22_1664868924386.jpg",
      description:
        "Dựa trên loạt manga nổi tiếng cùng loạt phim truyền hình cùng tên, Gotoubun No Hanayome/ Nhà Có Năm Nàng Dâu kể về Uesugi Futaro - một học sinh trung học có thành tích xuất sắc nhưng lại có một cuộc sống khó khăn. Cơ hội giúp cậu có thể trả nợ cho gia đình là được nhà Nakano giàu có thuê làm gia sư cho con gái của họ. Tuy nhiên, cậu nhận ra người cậu phải kèm không phải một mà là chị em sinh 5, có vẻ ngoài giống hệt nhau nhưng tính cách khác một trời một vực. Ban đầu, cả năm cô chỉ coi cậu là một người lạ mặt trong nhà, sự kiên trì và cần mẫn của Futaro dần thuyết phục những cô gái tập trung vào việc học, giúp điểm ngày một tăng. Trong tương lai, Futaro sẽ kết hôn với một trong 5 chị em, tất cả bọn họ ai cũng phải lòng cậu. Người đó sẽ là ai? Phim mới Nhà Có Năm Nàng Dâu ra mắt tại các rạp chiếu phim toàn quốc từ 07.10.2022.",
      price: "130.000",
      Age: "C16",
    },
  ],
  item: [],
  cartTotalQuanity: 0,
  cartTotalAmount: 0,
  fillter: {
    search: "",
    priority: [],
  },
  productDetail: {},
};
const productSlice = createSlice({
  name: "movie",
  initialState: initValue,
  reducers: {
    addToCart(state, action) {
      state.item.push(action.payload);
      state.cartTotalQuanity++;
      state.cartTotalAmount += action.payload.price;
    },
    deleteProDuct(state, action) {
      let index = action.payload;
      state.product.splice(index, 1);
    },
    deleteItemCart(state, action) {
      let index = action.payload;
      state.cartTotalAmount -= state.item[index].price;
      state.item.splice(index, 1);
    },

    searchFillterChange(state, action) {
      state.fillter.search = action.payload;
    },
    getMovieDetail(state, action) {
      state.productDetail = state.product.filter((item) => {
        return item.id == action.payload;
      });
    },
    getProDuct(state, action) {
      return (state.item = state.product.filter((item) => {
        return (item = action.payload);
      }));
    },
  },
});

export const {
  addToCart,
  deleteProDuct,
  deleteItemCart,
  searchFillterChange,
  getMovieDetail,
  getProDuct,
} = productSlice.actions;
export default productSlice.reducer;
