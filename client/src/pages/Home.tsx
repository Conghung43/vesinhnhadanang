import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { ServiceCard } from "@/components/ServiceCard";
import { BookingForm } from "@/components/BookingForm";
import { ReviewCard } from "@/components/ReviewCard";
import { 
  Home as HomeIcon, 
  Building2, 
  Building, 
  Clock, 
  CheckCircle2, 
  Phone,
  MapPin,
  Mail,
  ShieldCheck,
  Leaf,
  Timer,
  Sparkles
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-body text-foreground overflow-x-hidden">
      <Header />

      {/* === HERO SECTION === */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-50/80 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-green-50/80 rounded-full blur-3xl -z-10" />

        <div className="container-width grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/20 shadow-sm mb-6 text-primary font-bold text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Làm sạch trong ngày - Gọi là có mặt
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold leading-[1.1] mb-6">
              Dịch vụ vệ sinh <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Chuyên Nghiệp</span> & 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-600"> Tận Tâm</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Giải pháp vệ sinh NHÀ CỬA - TRỌ - VĂN PHÒNG uy tín hàng đầu.
              Chúng tôi mang đến không gian sống sạch sẽ, an toàn và tiết kiệm thời gian cho bạn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#booking" className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all text-center">
                Đặt lịch Online
              </a>
              <a href="tel:0912345678" className="px-8 py-4 bg-white border-2 border-primary/10 hover:border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-all text-center">
                Gọi tư vấn miễn phí
              </a>
            </div>

            <div className="mt-10 flex items-center gap-8 text-sm font-semibold text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-secondary w-5 h-5" /> Uy tín 100%
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-secondary w-5 h-5" /> Giá minh bạch
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-secondary w-5 h-5" /> Nhân viên tận tâm
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image with rounded abstract shape */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              {/* Living room cleaning image from Unsplash */}
              <img 
                src="https://pixabay.com/get/ge448a0f338002a1e5dfe7d4967c8b19df5bca5e37515fb514bcc54e249ced579212c455325f9eb657c35dd3358b840806b38e1ba74792bc27c1530331ee26249_1280.jpg" 
                alt="Professional Cleaning Service" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-xs">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="font-bold text-foreground">Cam kết sạch sẽ</p>
                  <p className="text-xs text-muted-foreground">Bảo hành dịch vụ 24h</p>
                </div>
              </div>
            </div>

            {/* Decorative pattern dots */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[url('https://www.transparenttextures.com/patterns/dot-grid.png')] opacity-30 z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* === SERVICES SECTION === */}
      <section id="services" className="py-20 lg:py-32 bg-gray-50/50">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Dịch vụ chi tiết</h2>
            <p className="text-muted-foreground text-lg">
              Giải pháp vệ sinh chuyên nghiệp, quy trình rõ ràng giúp bạn tiết kiệm thời gian và chi phí.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* House Cleaning Detail */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <HomeIcon size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Dọn dẹp nhà ở</h3>
              <ul className="space-y-3">
                {[
                  "Quét – lau sàn toàn bộ nhà",
                  "Lau bàn ghế, tủ, kệ",
                  "Dọn bếp, rửa chén, lau bếp gas",
                  "Lau kính, cửa sổ (trong nhà)",
                  "Vệ sinh toilet: bồn cầu, lavabo, gương",
                  "Thu gom và phân loại rác"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 size={18} className="text-secondary shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Cleaning Detail */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Building2 size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Dọn dẹp văn phòng</h3>
              <ul className="space-y-3">
                {[
                  "Lau bàn làm việc, ghế, tủ hồ sơ",
                  "Quét – lau sàn, hút bụi thảm",
                  "Lau kính, cửa ra vào",
                  "Vệ sinh pantry, khu sinh hoạt chung",
                  "Vệ sinh nhà vệ sinh văn phòng",
                  "Nhận dọn định kỳ (ngày/tuần/tháng)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 size={18} className="text-secondary shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Room Cleaning Detail */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Building size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Dọn nhà trọ - Căn hộ</h3>
              <ul className="space-y-3">
                {[
                  "Dọn trước khi vào ở / sau khi trả phòng",
                  "Lau sàn, tường, trần mạng nhện",
                  "Vệ sinh toilet, bếp chuyên sâu",
                  "Thu gom rác, khử mùi hôi",
                  "Chuẩn bị phòng cho khách mới",
                  "Có hợp đồng dài hạn – giá ưu đãi"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 size={18} className="text-secondary shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === PROCESS SECTION === */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Quy trình làm việc</h2>
            <p className="text-muted-foreground text-lg">
              5 bước đơn giản để có một không gian sạch sẽ hoàn hảo.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Đặt lịch", desc: "Online hoặc gọi Hotline" },
              { step: "02", title: "Tư vấn", desc: "Xác nhận dịch vụ & giá" },
              { step: "03", title: "Thi công", desc: "Đội ngũ đến đúng giờ" },
              { step: "04", title: "Kiểm tra", desc: "Dọn dẹp theo checklist" },
              { step: "05", title: "Nghiệm thu", desc: "Hài lòng mới thanh toán" }
            ].map((item, i) => (
              <div key={i} className="relative text-center group">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {i < 4 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-primary/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === ABOUT US SECTION === */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="container-width grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Cleaners working image */}
              <img 
                src="https://pixabay.com/get/gc4874454d74da5d721c2d0e94f3a3e67971522501d4389f62497e9c01bebf7413de43bf54b0b72b3fe0f748eca072c1f1490a887f4a2324e55d704e02cbba18e_1280.jpg" 
                alt="Our dedicated team" 
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Sạch từ tâm <br/>
              <span className="text-primary">Gọn từ nhà</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Chúng tôi không chỉ làm sạch bụi bẩn, chúng tôi mang lại sự thoải mái và an tâm cho không gian sống của bạn.
              Với đội ngũ nhân viên được đào tạo bài bản và kiểm tra lý lịch kỹ càng, bạn có thể hoàn toàn yên tâm khi giao phó ngôi nhà của mình.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Nhân viên tin cậy</h4>
                  <p className="text-muted-foreground">Lý lịch rõ ràng, được đào tạo chuyên nghiệp.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Leaf size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Hóa chất an toàn</h4>
                  <p className="text-muted-foreground">Sử dụng sản phẩm thân thiện môi trường, an toàn cho trẻ nhỏ.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                  <Timer size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Hỗ trợ nhanh 30p</h4>
                  <p className="text-muted-foreground">Có mặt nhanh chóng sau khi xác nhận đặt lịch.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === PRICING SECTION === */}
      <section id="pricing" className="py-20 lg:py-32 bg-primary/5">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Bảng giá minh bạch</h2>
            <p className="text-muted-foreground text-lg">
              Chi phí hợp lý, không phát sinh phụ phí.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Theo giờ", price: "80k - 100k", unit: "vnđ/giờ", features: ["Tối thiểu 2 giờ", "Không bao gồm dụng cụ", "Linh hoạt thời gian"] },
              { title: "Trọn gói", price: "9k - 18k", unit: "vnđ/m²", features: ["Bao gồm dụng cụ", "Máy hút bụi công nghiệp", "Làm sạch chuyên sâu"], highlight: true },
              { title: "Văn phòng", price: "8k - 16k", unit: "vnđ/m²", features: ["Hợp đồng định kỳ", "Xuất hóa đơn VAT", "Nhân viên cố định"] },
              { title: "Phòng trọ", price: "180k - 350k", unit: "vnđ/phòng", features: ["Dưới 25m²", "Vệ sinh toilet", "Lau dọn nội thất"] },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-3xl p-8 border ${plan.highlight ? 'border-primary shadow-xl scale-105 z-10' : 'border-border shadow-lg'} flex flex-col`}
              >
                {plan.highlight && (
                  <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">PHỔ BIẾN NHẤT</div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-3xl font-bold ${plan.highlight ? 'text-primary' : 'text-foreground'}`}>{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.unit}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-secondary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#booking" className={`w-full py-3 rounded-xl font-bold text-center transition-colors ${plan.highlight ? 'bg-primary text-white hover:bg-primary/90' : 'bg-gray-100 text-foreground hover:bg-gray-200'}`}>
                  Chọn gói này
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === REVIEWS SECTION === */}
      <section className="py-20">
        <div className="container-width">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">Khách hàng nói gì về chúng tôi</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ReviewCard 
              name="Chị Lan" 
              role="Chung cư Times City"
              rating={5}
              content="Dịch vụ rất tốt, nhân viên đến đúng giờ và làm việc rất nhiệt tình. Nhà mình có trẻ con nên rất quan trọng việc dùng hóa chất an toàn, bên này đáp ứng được điều đó."
              delay={0}
            />
            <ReviewCard 
              name="Anh Tuấn" 
              role="Văn phòng Startup Cầu Giấy"
              rating={5}
              content="Đã ký hợp đồng vệ sinh định kỳ cho văn phòng công ty. Các bạn làm việc chuyên nghiệp, nhanh gọn, không ảnh hưởng đến giờ làm việc của nhân viên."
              delay={0.2}
            />
            <ReviewCard 
              name="Bạn Mai" 
              role="Sinh viên ĐH Quốc Gia"
              rating={4}
              content="Giá cả hợp lý cho sinh viên tụi mình khi chuyển trọ. Dọn sạch sẽ từ A-Z, mình chỉ việc xách vali vào ở thôi. Sẽ ủng hộ dài dài."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* === BOOKING SECTION === */}
      <section id="booking" className="py-20 lg:py-32 relative bg-primary overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
           <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-white">
             <path d="M0 100 C 20 0 50 0 100 100 Z" />
           </svg>
        </div>

        <div className="container-width relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Sẵn sàng trải nghiệm không gian sạch sẽ?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
                Điền thông tin vào form bên cạnh, chúng tôi sẽ liên hệ tư vấn và báo giá chi tiết trong vòng 30 phút.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
                  <Phone className="w-8 h-8" />
                  <div>
                    <p className="text-sm text-blue-200">Hotline tư vấn 24/7</p>
                    <p className="text-2xl font-bold">0912.345.678</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center font-bold text-xs">Zalo</div>
                  <div>
                    <p className="text-sm text-blue-200">Chat Zalo</p>
                    <p className="text-xl font-bold">0912.345.678</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="container-width grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6 text-white">
              <Sparkles size={24} className="text-primary" />
              <h3 className="font-display font-bold text-xl">CLEAN <span className="text-secondary">PRO</span></h3>
            </div>
            <p className="mb-6 text-sm leading-relaxed opacity-80">
              Đơn vị cung cấp dịch vụ vệ sinh công nghiệp uy tín, chuyên nghiệp hàng đầu. Cam kết mang lại sự hài lòng tuyệt đối cho khách hàng.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Dịch vụ</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Vệ sinh nhà ở</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Vệ sinh văn phòng</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Vệ sinh công nghiệp</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Giặt ghế sofa, thảm</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Liên hệ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Số 123 Đường ABC, Quận Cầu Giấy, TP. Hà Nội</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>0912.345.678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>lienhe@cleanpro.vn</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Khu vực phục vụ</h4>
            <div className="flex flex-wrap gap-2">
              {['Cầu Giấy', 'Ba Đình', 'Đống Đa', 'Thanh Xuân', 'Hoàn Kiếm', 'Hai Bà Trưng', 'Hà Đông', 'Nam Từ Liêm'].map(area => (
                <span key={area} className="bg-slate-800 px-3 py-1 rounded-full text-xs hover:bg-slate-700 transition-colors cursor-default">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="container-width border-t border-slate-800 mt-16 pt-8 text-center text-xs opacity-50">
          <p>© 2024 CleanPro Service. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
