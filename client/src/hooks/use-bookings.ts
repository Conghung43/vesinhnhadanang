import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertBooking } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateBooking() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertBooking) => {
      // Validate with shared schema before sending
      const validated = api.bookings.create.input.parse(data);
      
      const res = await fetch(api.bookings.create.path, {
        method: api.bookings.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Vui lòng kiểm tra lại thông tin");
        }
        throw new Error("Có lỗi xảy ra, vui lòng thử lại sau");
      }

      return api.bookings.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Đặt lịch thành công!",
        description: "Chúng tôi sẽ liên hệ lại với bạn trong vòng 30 phút.",
        variant: "default", 
        className: "bg-green-600 text-white border-none"
      });
      // Invalidate list query if we were displaying bookings (admin side)
      queryClient.invalidateQueries({ queryKey: [api.bookings.list.path] });
    },
    onError: (error: Error) => {
      toast({
        title: "Lỗi đặt lịch",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
