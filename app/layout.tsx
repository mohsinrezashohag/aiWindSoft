import Navbar from '@/components/Navbar'
import '../styles/global.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Ai Wind',
  description: 'Created By Mohsin Reza',

}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>
    <html lang="en">

      <head>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.css" rel="stylesheet" />

      </head>


      <body className='min-h-screen bg-white text-black'>


        <Navbar />
        {children}
        <Footer />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"></script>

      </body>

    </html>
  </>
}

export default Layout
