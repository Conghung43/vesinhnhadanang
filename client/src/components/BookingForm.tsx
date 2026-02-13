import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertBookingSchema } from "@shared/schema";
import { useCreateBooking } from "@/hooks/use-bookings";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Calendar, CheckCircle } from "lucide-react";
import { z } from "zod";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const formSchema = insertBookingSchema.extend({
  phone: z.string().min(10, "Số điện thoại không hợp lệ"),
  serviceType: z.string().min(1, "Vui lòng chọn dịch vụ"),
  preferredTime: z.string().min(1, "Vui lòng nhập thời gian mong muốn")
});

export function BookingForm() {
  const { mutate, isPending, isSuccess } = useCreateBooking();
  const { toast } = useToast();
  const [isEmailSending, setIsEmailSending] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      serviceType: "",
      preferredTime: "",
      notes: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      toast({
        title: "Thiếu cấu hình EmailJS",
        description: "Vui lòng thiết lập VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID và VITE_EMAILJS_PUBLIC_KEY.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsEmailSending(true);
      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        {
          to_email: "conghung43@gmail.com",
          name: data.name,
          phone: data.phone,
          address: data.address,
          service_type: data.serviceType,
          preferred_time: data.preferredTime,
          notes: data.notes || "Không có",
        },
        {
          publicKey: emailPublicKey,
        }
      );
    } catch (error) {
      toast({
        title: "Không gửi được email",
        description: "Đã ghi nhận yêu cầu, nhưng gửi email thất bại. Vui lòng thử lại.",
        variant: "destructive",
      });
    } finally {
      setIsEmailSending(false);
    }

    mutate(data);
  }

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl border border-green-100"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2 font-display">Đặt lịch thành công!</h3>
        <p className="text-muted-foreground mb-8">
          Cảm ơn bạn đã tin tưởng dịch vụ của chúng tôi. Nhân viên tư vấn sẽ liên hệ lại với bạn trong vòng 30 phút để xác nhận.
        </p>
        <Button 
          onClick={() => window.location.reload()}
          className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-8"
        >
          Đặt lịch mới
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl shadow-primary/10 border border-border">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-primary/10 p-3 rounded-xl">
          <Calendar className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-display">Điền thông tin đặt lịch</h3>
          <p className="text-sm text-muted-foreground">Tư vấn hoàn toàn miễn phí</p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Họ và tên</FormLabel>
                  <FormControl>
                    <Input placeholder="Nguyễn Văn A" className="rounded-xl h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Số điện thoại</FormLabel>
                  <FormControl>
                    <Input placeholder="0912 xxx xxx" className="rounded-xl h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Địa chỉ</FormLabel>
                <FormControl>
                  <Input placeholder="Số nhà, Tên đường, Quận/Huyện..." className="rounded-xl h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loại dịch vụ</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-xl h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors">
                        <SelectValue placeholder="Chọn dịch vụ" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="Dọn nhà ở">Dọn nhà ở</SelectItem>
                      <SelectItem value="Dọn văn phòng">Dọn văn phòng</SelectItem>
                      <SelectItem value="Dọn nhà trọ/chung cư">Dọn nhà trọ / Chung cư</SelectItem>
                      <SelectItem value="Dọn theo giờ">Dọn theo giờ</SelectItem>
                      <SelectItem value="Vệ sinh công nghiệp">Vệ sinh công nghiệp</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preferredTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thời gian mong muốn</FormLabel>
                  <FormControl>
                    <Input placeholder="VD: 8h sáng mai" className="rounded-xl h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ghi chú thêm (Tùy chọn)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="VD: Cần mang thang, nhà có chó dữ..." 
                    className="rounded-xl min-h-[100px] resize-none bg-gray-50 border-gray-200 focus:bg-white transition-colors" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={isPending || isEmailSending}
            className="w-full h-14 text-lg font-bold rounded-xl bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            {isPending || isEmailSending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Đang gửi...
              </>
            ) : (
              "Xác nhận đặt lịch"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
