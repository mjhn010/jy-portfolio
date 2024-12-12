import Footer from '@/component/Footer';
import Header from '@/component/Header';
import Info from '@/component/Info';
import Main from '@/component/Main';
import Project from '@/component/Project';
import ChatBot from '@/component/chatBot/ChatBot';

export default function page() {
  return (
    <>
      <div className="relative">
        <Header />
        <Main />
        <Info />
        <Project />
        <ChatBot />
        <Footer />
      </div>
    </>
  );
}
