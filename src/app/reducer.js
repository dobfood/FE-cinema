import {createSlice} from '@reduxjs/toolkit';
import { data } from 'autoprefixer';
import axios from 'axios';
import { useEffect } from 'react';


const initValue = {
    product : [
      {
        id: 1,
        name: 'BLACK ADAM',
        engname : 'BLACK ADAM',
        category : "Hành Động",
        author : "Warner Bros",
        cast :" Dwayne Johnson, Pierce Brosnan, Sarah Shahi",
        date : "20/10/2022",
        imageSrc: 'https://cdn.galaxycine.vn/media/2022/9/26/900wx1350h_1664177555434.jpg',
        description: "Black Adam được các fan truyện tranh biết đến nhiều nhất trong vai trò kẻ thù - đối thủ lớn nhất của siêu anh hùng Shazam của vũ trụ truyện tranh và điện ảnh DC. Theo nhiều phiên bản truyện, nếu như người được chọn hô to câu thần chú “Shazam!” sẽ lập tức nhận được sức mạnh của phù thủy cổ xưa, thì câu thần chú này sẽ giúp cho Black Adam có được sức mạnh của 6 vị thần Ai Cập cổ đại gồm: Shu (Thần Gió với sức mạnh bất khả chiến bại), Heru (Vị thần của bầu trời, chiến tranh và săn bắn với siêu tốc độ), Amon (Thần bảo hộ các Pharaoh ban cho thể lực dồi dào), Zehuti (Vị thần của trí tuệ vô song), Aton (cho Black Adam sức mạnh của sấm sét) and Mehen (Thần Rắn với sức mạnh của lòng can đảm).  Phim mới Black Adam khởi chiếu 21.10.2022 tại các rạp chiếu phim toàn quốc.",
        price: '$35',
        Age : 'C13'
      },
      {
        id: 2,
        name: 'CÔ GÁI TỪ QUÁ KHƯ',
        engname : 'GIRL FROM THE PAST',
        category : "Phim ma",
        author : "Việt Nam",
        cast :"Diễn viên:  Ninh Dương Lan Ngọc, Kaity Nguyễn, NSND Lê Khanh, Hữu Châu, Lãnh Thanh, Lê Xuân Tiền",
        date : "Ngày khởi chiếu:  20/10/2022",
        imageSrc: 'https://cdn.galaxycine.vn/media/2022/9/30/wweww_1664505396042.jpg',
        description: " Đang tất bật chuẩn bị cho đám cưới triệu đô cùng chàng Jack điển trai, đại mỹ nhân showbiz Ms. Q/Hoàng Quyên (Ninh Dương Lan Ngọc) bất ngờ mất tích một cách bí ẩn ngay sau khi gặp lại Quỳnh Yên (Kaity Nguyễn), một người bạn đã mất liên lạc từ 15 năm trước. Ngay lập tức, các rắc rối liên tục ập đến, kéo theo những bí mật đen tối của cả hai dần bị lột trần. Ai là kẻ thủ ác? Ai mới là nạn nhân?  P/S: Bất kể cô ta có nói gì thì cũng nên nhớ: Đừng tin lời cô ta nói! Phim mới Cô Gái Từ Quá Khứ ra mắt tại các rạp chiếu phim từ 13.10.2022 Xem thêm tại: https://www.galaxycine.vn/dat-ve/co-gai-tu-qua-khu",
        price: '$35',
        Age : 'C18'
      },
      {
        id: 3,
        name: '6/45',
        engname : '6/45',
        category : "Phim hài",
        author : "Korea",
        cast :" Lee Yi Kyung, Go Kyung Pyo",
        date : "21/9/2022",
        imageSrc: 'https://cdn.galaxycine.vn/media/2022/9/14/1200wx1800h_1663128392583.jpg',
        description: "Đang tất bật chuẩn bị cho đám cưới triệu đô cùng chàng Jack điển trai, đại mỹ nhân showbiz Ms. Q/Hoàng Quyên (Ninh Dương Lan Ngọc) bất ngờ mất tích một cách bí ẩn ngay sau khi gặp lại Quỳnh Yên (Kaity Nguyễn), một người bạn đã mất liên lạc từ 15 năm trước. Ngay lập tức, các rắc rối liên tục ập đến, kéo theo những bí mật đen tối của cả hai dần bị lột trần. Ai là kẻ thủ ác? Ai mới là nạn nhân?  P/S: Bất kể cô ta có nói gì thì cũng nên nhớ: Đừng tin lời cô ta nói! Phim mới Cô Gái Từ Quá Khứ ra mắt tại các rạp chiếu phim từ 13.10.2022   Xem thêm tại: https://www.galaxycine.vn/dat-ve/co-gai-tu-qua-khu",
        price: '$35',
        Age : 'C13'
      },
      {
        id: 4,
        name: 'NỮ VƯƠNG HUYỀN THOẠI',
        engname : 'Gina Price-Bythewood',
        category : "Phim Kinh tởm",
        author : "Gina Price-Bythewood",
        cast :"Viola Davis, Thuso Mbedu, Lashana Lynch, Sheila Atim, Hero Fiennes Tiffin, John Boyega…",
        date : "14/10/2022",
        imageSrc: 'https://cdn.galaxycine.vn/media/2022/10/8/1200x1800_1665216609067.jpg',
        description: "Lấy cảm hứng từ những sự kiện có thật trong lịch sử đã xảy ra ở Vương quốc Dahomey - một trong những quốc gia hùng mạnh nhất của châu Phi thế kỷ 18 và 19. “Nữ Vương Huyền Thoại” xoay quanh nhóm chiến binh toàn nữ Agojie với nhiệm vụ bảo vệ vương quốc và đức vua. Vị tướng Nanisca huấn luyện một thế hệ chiến binh mới để chiến đấu chống lại kẻ thù muốn phá hủy lối sống của họ. Phim mới Nữ Vương Huyền Thoại ra mắt tại các rạp chiếu phim từ 12.10.2022. Xem thêm tại: https://www.galaxycine.vn/dat-ve/the-woman-king",
         price: '$35',
        Age : 'C18'
      },
  ],
    item : [],
    cartTotalQuanity : 0,
    cartTotalAmount : 0,
    fillter : {
        search : '',
        priority : []
    },
    productDetail:{}
};
const productSlice = createSlice({
name : "movie",
initialState:initValue,
reducers : {
    addToCart(state, action) {
        state.item.push(action.payload);
        state.cartTotalQuanity++;
        state.cartTotalAmount += action.payload.price
    },
    deleteProDuct(state,action) {
        let index = action.payload
        state.product.splice(index,1)
    },
    deleteItemCart(state,action) {
        let index = action.payload
        state.cartTotalAmount -= state.item[index].price
        state.item.splice(index,1)
    },
    
    searchFillterChange(state,action) {
       state.fillter.search = action.payload
    },
    getMovieDetail(state,action) {
      console.log(action.payload);
      state.productDetail = state.product.filter(item => {
        return item.id == action.payload })
    }
}
})

export const {addToCart,deleteProDuct,deleteItemCart,searchFillterChange,getMovieDetail} = productSlice.actions
export default productSlice.reducer