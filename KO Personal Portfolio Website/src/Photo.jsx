import { useState } from 'react'

// Shows an image, or a neutral placeholder if the file is missing.
function Photo({ src, alt, fallback = 'Photo unavailable' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <span className="photo-fallback" role="img" aria-label={alt}>{fallback}</span>
  }
  return <img src={src} alt={alt} onError={() => setFailed(true)} />
}

export default Photo