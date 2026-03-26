import DashboardSkeleton from "@/app/ui/skeletons";
// 放在路由组overview中,loading.tsx 文件只会应用到你的仪表盘概览页面
export default function Loading() {
  return <DashboardSkeleton />;
}
