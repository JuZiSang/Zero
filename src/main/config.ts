import path from "path";

export default {
  // 笔记路径
  noteDir: path.resolve(__dirname, "../note"),
  // 开发模式
  isDevelopment: process.env.NODE_ENV !== "production"
};
