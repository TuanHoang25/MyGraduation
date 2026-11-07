/**
 * DỮ LIỆU CẤU HÌNH LỄ TỐT NGHIỆP - TÔ HOÀNG TUẤN
 */

export const GRADUATION_DATA = {
  // 1. THÔNG TIN CÁ NHÂN KỸ SƯ
  graduate: {
    fullName: "Tô Hoàng Tuấn",
    nickName: "Hoàng Tuấn",
    degree: "Kỹ sư Công nghệ Thông tin",
    honor: "Tân Kỹ sư CNTT 🎓",
    university: "Trường Đại học Công nghệ TP.HCM (HUTECH)",
    faculty: "Khoa Công nghệ Thông tin",
    graduationDate: "Chủ Nhật, ngày 08/11/2026",
    graduationTime: "07:30 - 12:00",
    ceremonyHall: "HUTECH Khu E (Trung tâm Đào tạo Nhân lực CLC)",
    ceremonyAddress: "10/80c Song Hành Xa Lộ Hà Nội, P. Tăng Nhơn Phú, TP. Thủ Đức, TP. Hồ Chí Minh",
    contactPhone: "", // SĐT của bạn nếu muốn thêm
    facebookUrl: "https://facebook.com",
    avatar: "/graduation-avatar.png",
    quote: "“4 năm thanh xuân đã qua, cảm ơn anh em đã đồng hành cùng tôi (đặc biệt cảm ơn anh Độ Mixi)”",
  },

  // 2. DANH SÁCH 3 GIAI ĐOẠN CHÍNH TRÊN ROADMAP 3D
  stages: [
    {
      id: 1,
      angle: 4.7, // Góc xoay của đảo 3D
      badge: "Giai đoạn 1",
      tagline: "🎉 CHÚC MỪNG LỄ TỐT NGHIỆP",
      title: "Cột Mốc Kỹ Sư CNTT - HUTECH",
      summary: "Khoảnh khắc chính thức đón nhận tấm bằng Kỹ sư Công nghệ Thông tin sau 4 năm nỗ lực dưới mái trường HUTECH.",
      cta: "Khám phá hành trình",
      modalContent: {
        headline: "Khoảnh Khắc Tốt Nghiệp 🎓",
        subheadline: "Chính thức trở thành Tân Kỹ sư Công nghệ Thông tin - Đại học HUTECH",
        message:
          "Sau 4 năm rèn luyện với vô vàn bài tập lớn, đồ án môn học, những đêm fix bug tới sáng cùng anh em bạn bè, ngày lễ tốt nghiệp cuối cùng cũng đã đến. Cảm ơn gia đình, thầy cô HUTECH và đặc biệt là những người anh em chiến hữu đã luôn sát cánh cùng Tuấn trong suốt chặng đường đại học tuyệt vời này!",
        milestones: [
          {
            year: "Năm 1",
            title: "Tân sinh viên HUTECH",
            desc: "Bước chân vào giảng đường HUTECH với niềm đam mê công nghệ, làm quen môi trường mới.",
            icon: "🌱",
          },
          {
            year: "Năm 2",
            title: "Code, Bug & Thuật toán",
            desc: "Chinh phục các môn cấu trúc dữ liệu, lập trình hướng đối tượng và những đêm thức trắng luyện code.",
            icon: "💻",
          },
          {
            year: "Năm 3",
            title: "Đồ án chuyên ngành & Thực tập",
            desc: "Tham gia các dự án thực tế, cọ xát kinh nghiệm lập trình và hoàn thiện kỹ năng phần mềm.",
            icon: "🚀",
          },
          {
            year: "Năm 4",
            title: "Khóa luận & Về đích",
            desc: "Bảo vệ thành công khóa luận tốt nghiệp, chính thức cầm trên tay tấm bằng Kỹ sư CNTT danh giá!",
            icon: "🏆",
          },
        ],
        gratitudeList: [
          "👨‍👩‍👧‍👦 Ba Mẹ & Gia đình: Điểm tựa vững chắc nhất trên mọi bước đường con đi.",
          "👨‍🏫 Quý Thầy Cô HUTECH: Những người thầy tận tâm đã truyền thụ tri thức và kinh nghiệm quý báu.",
          "🤝 Anh em bạn bè & Chiến hữu: Những người cùng cày đồ án, chia sẻ niềm vui và kỷ niệm thanh xuân rực rỡ.",
        ],
      },
    },
    {
      id: 2,
      angle: 2.5,
      badge: "Giai đoạn 2",
      tagline: "🍽️ GỢI Ý ĐỊA ĐIỂM ĂN CHƠI",
      title: "Lên Kèo Oanh Tạc Cùng Anh Em!",
      summary: "Lịch trình ăn uống tại Vincom Lê Văn Việt, hát hò tại ICOOL, chiến game PlayStation và cafe chill tối Sài Gòn.",
      cta: "Xem địa điểm ăn chơi",
      modalContent: {
        headline: "Lịch Trình Ăn Chơi Sau Buổi Lễ 🍻",
        subheadline: "Tụ tập quẩy hết mình cùng anh em với 3 tăng chuẩn bài",
        categories: [
          {
            categoryName: "TĂNG 1: Nạp Năng Lượng - Tiệc Trưa Mừng Tốt Nghiệp",
            items: [
              {
                name: "Vincom Plaza Lê Văn Việt",
                type: "Ẩm thực & Nhà hàng đa dạng (Lẩu, Nướng, Món Á - Âu)",
                price: "~200k - 350k / người",
                distance: "Gần trường HUTECH Khu E (5 - 7 phút)",
                address: "50 Đ. Lê Văn Việt, Tăng Nhơn Phú, TP. Thủ Đức, TP.HCM",
                highlight: "Tập trung nhiều thương hiệu lẩu nướng nổi tiếng (Haidilao, Dookki, Gogi...), không gian máy lạnh mát rượi, giữ xe thuận tiện.",
                mapQuery: "Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, Tăng Nhơn Phú, Thủ Đức",
              },
            ],
          },
          {
            categoryName: "TĂNG 2: Bung Xõa Hát Hò & Chiến Game",
            items: [
              {
                name: "Karaoke ICOOL Lê Văn Việt",
                type: "Hát hò & Quẩy cùng hội bạn",
                price: "Theo giờ hát",
                distance: "Nằm trên trục đường Lê Văn Việt",
                address: "140 Đ. Lê Văn Việt, Tăng Nhơn Phú, TP. Thủ Đức, TP.HCM",
                highlight: "Hệ thống âm thanh ánh sáng đỉnh cao, phòng tiệc VIP rộng rãi, tha hồ song ca những bài hát thanh xuân cùng anh em.",
                mapQuery: "Karaoke ICOOL 140 Lê Văn Việt, Tăng Nhơn Phú, Thủ Đức",
              },
              {
                name: "Tiệm Game PlayStation Hàn Thuyên",
                type: "Giao lưu PS5 / PES / FIFA / Đối kháng",
                price: "Giá học sinh - sinh viên",
                distance: "Khu vực làng đại học - Thủ Đức",
                address: "2 Hàn Thuyên, TP. Thủ Đức, TP. Hồ Chí Minh",
                highlight: "Tay cầm xịn sò, màn hình lớn, nơi anh em IT so tài tay nghề các tựa game đối kháng gay cấn nhất!",
                mapQuery: "2 Hàn Thuyên, Thủ Đức, Hồ Chí Minh",
              },
            ],
          },
          {
            categoryName: "TĂNG 3: Cà Phê Tối Sài Gòn (Địa Điểm Bàn Sau)",
            items: [
              {
                name: "Cà phê Tối Sài Gòn Chill",
                type: "Trò chuyện & Hóng gió đêm",
                price: "~40k - 70k / người",
                distance: "Địa điểm sẽ được bàn bạc và chốt cùng ae",
                address: "Khu vực Thủ Đức / Trung tâm TP. Hồ Chí Minh",
                highlight: "Ngồi lại bên ly cafe, ngắm nhìn phố phường Sài Gòn lung linh về đêm và tâm sự về những dự định tương lai.",
                mapQuery: "Quán cafe đẹp Thủ Đức Hồ Chí Minh",
              },
            ],
          },
        ],
        tips: [
          "🎉 Anh em có mặt sau 10h tại trường là thời điểm đẹp nhất để chụp ảnh cùng nhau!",
          "📸 Chuẩn bị điện thoại đầy pin để chụp ảnh check-in kỷ niệm ngày lễ.",
          "🚗 Các địa điểm Tăng 1 và Tăng 2 đều nằm trên trục đường Lê Văn Việt rất thuận tiện di chuyển.",
        ],
      },
    },
    {
      id: 3,
      angle: 0.95,
      badge: "Giai đoạn 3",
      tagline: "💌 THIỆP MỜI THÂN MẬT",
      title: "Kính Mời Anh Em, Bạn Bè Đến Chung Vui",
      summary: "Chủ Nhật, 08/11/2026 tại HUTECH Khu E. Sau 10h anh em đến trường chụp ảnh kỷ niệm rồi cùng đi ăn nhé!",
      cta: "Mở thiệp mời & Lịch trình",
      modalContent: {
        headline: "Trân Trọng Kính Mời Bạn Bè & Anh Em 💌",
        subheadline: "Sự hiện diện của anh em là niềm vui lớn nhất của Tuấn trong ngày tốt nghiệp!",
        invitationText:
          "Vào ngày Chủ Nhật 08/11/2026, mình sẽ chính thức nhận bằng Kỹ sư Công nghệ Thông tin tại HUTECH Khu E. Rất mong được đón tiếp anh em, bạn bè đến trường chụp chung vài tấm ảnh kỷ niệm thanh xuân, sau đó chúng ta cùng nhau đi ăn mừng một bữa thật vui nhé!",
        timeline: [
          {
            time: "07:30 - 10:00",
            event: "Lễ Trao Bằng Chính Thức",
            note: "Tuấn làm lễ nhận bằng tốt nghiệp bên trong hội trường.",
          },
          {
            time: "Sau 10:00",
            event: "⭐ Thời điểm vàng: Anh em đến trường chụp ảnh kỷ niệm",
            note: "Chụp ảnh cùng lễ phục cử nhân, hoa và bằng tốt nghiệp tại các góc check-in HUTECH Khu E.",
          },
          {
            time: "11:30 trở đi",
            event: "Xuất phát đi ăn Tăng 1 tại Vincom Lê Văn Việt",
            note: "Cùng nhau nạp năng lượng và nâng ly chúc mừng!",
          },
          {
            time: "Chiều & Tối",
            event: "Tăng 2 (Karaoke / PS) & Tăng 3 (Cafe tối)",
            note: "Quẩy hết mình cùng hội anh em chiến hữu.",
          },
        ],
        dresscode: "Trang phục lịch sự, tự do (hoặc mặc cl gì cũng dc nhé)",
        calendarEvent: {
          title: "Lễ Tốt Nghiệp Kỹ Sư CNTT - Tô Hoàng Tuấn 🎓",
          details: "Tham dự lễ tốt nghiệp và chụp hình kỷ niệm cùng Hoàng Tuấn tại Đại học HUTECH Khu E. Sau 10h có mặt chụp ảnh rồi đi ăn mừng!",
          location: "Đại Học HUTECH Khu E, 10/80c Song Hành Xa Lộ Hà Nội, Tăng Nhơn Phú, Thủ Đức, TP.HCM",
          startDate: "20261108T073000",
          endDate: "20261108T120000",
        },
      },
    },
  ],
};
