import React from 'react'

const Footer = () => {

 const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
 }

 return (
  <div>
   <h4
    onClick={() => openInNewTab("https://github.com/hrithik73")}
   >Built with ❤️ by Hrithik</h4>
  </div>
 )
}
export default Footer
