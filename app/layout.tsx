import Navbar from '@/components/Navbar'
import '../styles/global.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '@/components/Footer';


export const metadata = {
  title: 'truewind',
  description: 'Created By Mohsin Reza',

}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>
    <html lang="en">

      <head>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </head>


      <body className='min-h-screen bg-white text-black'>


        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  </>
}

export default Layout
