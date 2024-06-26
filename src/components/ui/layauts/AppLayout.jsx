import Footer from '../../Footer'
import Header from '../../Header'
import PropTypes from 'prop-types'




export default function AppLayout({ children }) {
  return (
    <>
      <Header></Header>
      <main className='min-h-[85vh]'>{children}</main>
      <Footer></Footer>
    </>
  )

}

AppLayout.propTypes = {children: PropTypes.node.isRequired}