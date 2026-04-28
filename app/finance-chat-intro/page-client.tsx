"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FinanceChatIntroClient() {
  return (
    <main className="fixed inset-0 z-[9999] bg-[#F8F9FA] sm:bg-gray-100 flex justify-center items-center overflow-hidden">
      <div className="w-full h-full sm:h-[90vh] sm:mt-[5vh] sm:rounded-3xl max-w-md bg-white flex flex-col shadow-2xl relative mx-auto overflow-y-auto custom-scrollbar">
        {/* Background Decorative Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10 w-full">
          {/* Avatar and Bubble Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center w-full max-w-[320px] mx-auto mt-8 mb-10"
          >
            {/* Speech Bubble */}
            <div className="relative bg-[#E9E9EB] text-[#000000] p-6 rounded-[28px] rounded-br-sm shadow-sm mb-6 w-full transform origin-bottom-right">
              <p className="text-lg font-medium leading-relaxed text-center tracking-tight">
                Answer a few questions in our chat to find your loan. <br />
                <span className="font-bold text-blue-600">
                  It&apos;s very quick! ⚡
                </span>
              </p>
              {/* iMessage style tail pointing down-right towards the avatar */}
              <div className="absolute -bottom-2 -right-2 w-6 h-6">
                <svg
                  viewBox="0 0 42 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-[#E9E9EB] fill-current"
                >
                  <path d="M41.6 43.5C41.6 43.5 29.8 41.2 21.3 32C12.8 22.8 15.5 0 15.5 0H0C0 0 1.2 24.5 13.5 35.8C25.8 47.1 41.6 43.5 41.6 43.5Z" />
                </svg>
              </div>
            </div>

            {/* Operator Avatar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.4 }}
              className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white self-end mr-4"
            >
              <Image
                src="https://media.topfinanzas.com/images/top-us-operator.webp"
                alt="Top Finanzas Assistant"
                fill
                className="object-cover"
                sizes="128px"
                priority
              />
              <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
            </motion.div>
          </motion.div>

          {/* Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col items-center relative overflow-hidden"
          >
            {/* Subtle top border gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-400"></div>

            <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">
              Shall we begin?
            </h2>

            <Link
              href="https://route.topnetworks.co/api/redirect/5458f64e-5e61-4da4-9102-584dc7f3f1e0"
              className="group relative block w-full rounded-2xl bg-blue-600 text-white py-4 px-6 text-lg font-bold transition-all text-center overflow-hidden hover:bg-blue-700 active:scale-[0.98] shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)]"
            >
              <div className="absolute inset-0 bg-white/20 w-full h-full translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Let&apos;s do it!
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
