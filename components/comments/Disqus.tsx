/* eslint @typescript-eslint/no-var-requires: "off" */
const { DisqusJS } = require('disqusjs/react/es2022')
import 'disqusjs/dist/react/styles/disqusjs.css'

const Disqus = () => {
  return (
    <DisqusJS
      shortname="aozaki-note"
      siteName="Aozaki's Blog"
      api="http://comment.aozaki.cc/api/"
      apikey="PQPgU5idiYszNLwnyHEjmZGU7JEp5Hp4XeDxCBQEUqfhAsE3PzdMN5xl5JcniL4g"
      admin="Aozaki"
      adminLabel="Admin"
    />
  )
}

export default Disqus
