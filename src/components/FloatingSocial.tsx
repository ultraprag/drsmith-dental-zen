import { MessageCircle } from "lucide-react";

const FloatingSocial = () => {
  const phoneNumber = "38765223310";
  const message = "Zdravo! Želim da zakažem termin.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const viberUrl = `viber://chat?number=%2B${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Viber Button */}
      <a
        href={viberUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-[#7360F2] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        aria-label="Pošaljite nam poruku na Viber"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
          <path d="M11.398 0C9.96 0 7.455.057 5.466 1.281 3.844 2.263 2.98 3.962 2.81 6.361c-.142 2.012-.115 5.67.006 7.467.265 3.922 2.177 6.155 5.936 6.751l.002 2.306c0 .398.168.782.462 1.053.293.27.689.416 1.09.402.4-.014.782-.185 1.055-.47l1.987-2.158c2.04-.082 3.637-.414 4.882-1.031 2.255-1.12 3.306-3.088 3.548-5.467.257-2.533.19-5.204-.19-7.508C21.143 4.58 19.93 2.61 17.518 1.37 15.52.334 12.958 0 11.398 0zm.124 1.81c1.403 0 3.713.293 5.45 1.193 1.908.99 2.806 2.474 3.093 4.574.329 2.088.405 4.592.169 6.909-.195 1.919-.977 3.378-2.71 4.238-.998.495-2.395.787-4.273.858l-.352.014-2.466 2.676v-2.938l-.587-.09c-3.143-.478-4.542-2.194-4.753-5.332-.109-1.643-.138-5.222-.004-7.116.132-1.932.78-3.21 1.955-3.964 1.594-1.025 3.834-1.022 5.478-1.022zm-.043 2.593c-.207 0-.375.168-.375.375s.168.375.375.375c2.407 0 4.877 1.289 4.877 4.877 0 .207.168.375.375.375s.375-.168.375-.375c0-4.154-2.93-5.627-5.627-5.627zm.011 1.5a.375.375 0 100 .75c1.723 0 3.377.892 3.377 3.377a.375.375 0 00.75 0c0-3.052-2.116-4.127-4.127-4.127zm.003 1.5a.375.375 0 100 .75c1.018 0 1.877.541 1.877 1.877a.375.375 0 00.75 0c0-1.887-1.303-2.627-2.627-2.627zm.485 1.388c-.243 0-.434.08-.558.144l-.023.012c-.187.104-.315.227-.448.402-.128.17-.211.406-.21.65 0 .25.08.501.2.754.24.506.644 1.043 1.156 1.554.512.512 1.048.916 1.554 1.156.253.12.504.2.754.2.244.001.48-.082.65-.21.175-.133.298-.26.402-.448l.012-.023c.064-.124.144-.315.144-.558 0-.315-.161-.565-.38-.72a4.35 4.35 0 00-.724-.408 3.184 3.184 0 00-.444-.175c-.184-.055-.398-.03-.548.089-.09.071-.159.156-.23.255-.072.1-.145.213-.226.315a.174.174 0 01-.17.057 2.635 2.635 0 01-.765-.4 3.23 3.23 0 01-.577-.504 3.23 3.23 0 01-.503-.577 2.635 2.635 0 01-.4-.765.174.174 0 01.056-.17c.102-.08.216-.154.316-.226.099-.071.184-.14.255-.23.119-.15.144-.364.09-.548a3.184 3.184 0 00-.176-.444 4.35 4.35 0 00-.408-.724c-.155-.22-.405-.38-.72-.38z"/>
        </svg>
        <span className="hidden sm:inline font-medium text-sm">Viber</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        aria-label="Pošaljite nam poruku na WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline font-medium text-sm">WhatsApp</span>
        
        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
      </a>
    </div>
  );
};

export default FloatingSocial;
