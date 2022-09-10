import React from 'react'
import '../styles/Proyects.scss'

function Proyects() {
  return (
    <section className='section'>
      <h2>Proyectos</h2>
      <div className="proyects__container">
        {materials.map(proyect => (
          <section className='proyect__card' key={proyect.name}>
            <div 
              className="preview_img" 
              style={{backgroundImage: `url('${proyect.img}')`}}></div>
            <div className="information"> 
              <h3>{proyect.name}</h3>
              <p className='description'>{proyect.description}</p>
              <div className="links">
                <a href='github.com' className='github'>GitHub</a>
                <a href='github.com' className='visitar'>Visitar</a>
                <a href='github.com' className='github'>Más info</a>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

const materials = [
  {
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--MPwrq01---/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/2f71wfjgldnssaxjkd11.png', 
    name: 'Solarcity', 
    description: 'Este es un proyecto hecho con react, html, css, Javascript, SASS, firebase', 
    visitar: '/', 
    github: 'https://github.com/stevendevcoder'
  },
  {
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--LfSAfAF5--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/p8okja00qmsdatymvqob.png', 
    name: 'Caloric app', 
    description: 'Este es un proyecto hecho con react, html, css, Javascript, SASS, firebase', 
    visitar: '/', 
    github: 'https://github.com/stevendevcoder'
  },
  {
    img: 'https://i.ytimg.com/vi/n8iA18R76jk/maxresdefault.jpg', 
    name: 'Instagram clone', 
    description: 'Este es un proyecto hecho con react, html, css, Javascript, SASS, firebase', 
    visit: '/', 
    github: 'https://github.com/stevendevcoder'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9U9lMQbCrT3g43VHhOqhik36JvpD9fbi8w&usqp=CAU',
    name: 'Chat app',
    description: 'Este es otro proyecto',
    visitar: '/',
    github: ''
  },
  {
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBESERUSEhQSGBQZDxAaGhoZEhYSGhQUHRgZHxwfGRocJjwlHiMuHxgYJjgmKy8xNzg1GiU7QD40PzA0NzQBDAwMEA8QGhIRHjQjISE0NDQ0NDQ6NDQxNDQ0NDQxNDQxPzQ0MTQ/NDY0NDQ0NDE0NTE0NDE0NDQ2NjQ0NDQ0NP/AABEIAJ8BPQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAgEEBQYDB//EAEMQAAIBAgMCCAoIBQQDAAAAAAECAAMRBBIhBTETIkFRUlRxkhcyM2FicpGTsdIUFRZCgYLB0QYjobLCB0NT8GOD4f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHxEBAAEEAwEBAQAAAAAAAAAAAAECERJREyExkYFB/9oADAMBAAIRAxEAPwDhcJgqdSmWavTRsxAV7i4ABvccmoA01N+aWH2VTAJGKw5IBNs2/mCnlO/m5O2ZUBPSjSxezUpoai4ii4utgp4zAkjRfyn2GZ0BCWARosaUEmRGRCxCgXJIAHOSbCURATpvsBtjqb+/wvzw+wG2Opv7/C/PGVO4HNQnS/YDbHU39/hvnk/YHbHU39/hvnjKncDmZM6X7A7Y6m/v8N88PsDtjqb+/wAN88uVO4HNwE6X7BbY6m/v8L88PsFtjqb+/wAL88uVO4+jm4CdL9gtsdTf3+F+eH2C2v1N/f4b55c6dx9HNyZ0f2C2v1N/f4b55P2C2v1N/f4b55cqdx9HNGKZ032C2v1N/f4b55B/gHbHU39/hvnjOncfRzBkGdOf4B2x1N/f4b55H2A2x1N/f4b55Mqdx9HMGQZ0/g/2x1Nvf4b55Hg+2x1Nvf4b55M6dwOXMUzqfB9tnqbe/wAN88jwe7Z6m3v8L88mdO4HLGKZ1fg92z1Nvf4b55Hg82z1Nvf4b55M6djlDIM6PHfwPtShTerVwrLTRbs3DUGyjsVyTv5BMCpRdRdhbdzcu6Mo2PIxTGMUyiDFMYxTIIM09ibLTEFs75ApQWFgxLE21ItyH9bcuYYrATMjU2Ts2nWeor1CoS1iCq3W7Auc5HFUAMeW3NMqsoDEX0DMAecA79NIESJBpQEICBIhAQlBGixpQT0w9TI6Pa+V0a269iDb+k85K7x2iUfWH/1TwZJY4XFXO+zoL7uZvNAf6pYPquJ3H76Dff0vOZw3BJ0V7ohwSdFe6Jz46dDu1/1VwgbMMNir26aG/tb/ALeevhcwvVsR3qfzTgODXor3RAU16K90RhTod/4XML1bEd6n80PC3hurYjvU/wB5wPBJ0V7ohwSdFe6JeOnQ7/wtYbq2I71P94eFrDdWxHep/vOA4NeivdEng16K90S8dGi7vvC1hurYjvU/3h4WsN1bEd6n+84Hg06K90S+2xXFrJTJKK2UWBsxQLbMBnuaiAZb6m28ScdGldh4WcN1bEd6n+8PCzhurYjvU/3nGJsdzf8Alr4rm/FbMFTPxct8wKlbEXF2XXWM+xqgt/LQ3F9Cll1YcYnRdVIBOhtoTLx0DsfCzhurYjvU/wB5Hhaw3VsR3qf7zj22LVH+0DonIoN2VGtY2N+Oi2t4zAbyL+OF2dwgYqqAKFuSNBe9r2BsNDxjZRykXEcdA7XwuYXq2I71P5oeF3C9WxHep/NOKxezDTVGdU46ow4jjRlDDjMoU6MPFJlTgk6K90Rx06R3/hdwvVcT3qfzQ8L2F6rie9T+afPzSTor3RFNJOivdEcdOlfQfDBheq4nvUvmkeGDC9VxPepfNPnxpJ0V7okGknRXuiTjp0PoXhgwvVcT3qXzSPDDheq4nvUvmnz40k6K90ReCTor3RHHRodh/EX+qGGxeErYdcPXUumUMzU7DUHWzX5J882ltR64XPqyoFBsq8UMSAcu/Vjrv1mmaSdFe6JT2lTUU7hQOMu4ARFNMT0jHMUxjFM6CDFMYxTIIMgyTIMyFMgyTIMDSgIQEgkQgISgjRY0oJK7x2iRJXeO0SjoYQhMhoCEBKJhCEoICEBKJl+ntWqgCpkUAg2FNACwKEMRa17oh/DzmUISWF8bWrCxUqpUEIQig01KBLI29dAN2t9eU3kbQr3K5V44TicEtmVS7LZLbrsxFuYc0pUr5lsQDmWxJAAN95J0t2zoMTXqcIqiurhRXJc42mrVyzUy6q4YikpyqVDWuA3KxWJtAzH2piCeEJuQycYoPHUoRc23/wApD+BlfD41qb56a01a6leIrZGXcVvqPgeUbpf23tBnqVUVlZGcNccbUhCyhvvAMi8fe2S99TfHMRHQ9sTimqBQypdVQZgtmIVQoueXQD2StGiygMUxjFMAMUxjFMggwgYSBTKe1PJn1l+MuGU9qeTPrL8YGKYpjGKZoQYpjGKZBBkGSZBmQpkGSZBgaUBCAkEiEBCUEaLGlBJXeO0SJK7x2iUdDCEJkNAQgJRMIQlBAQgJRMIQgEv4HZj1dV4y5HvlK3RgGyB8xAGZgttdRe1yCBQmxQq0qtIUahPjPU/lU0TJkQghwcqOWRSQQbg9IsQEjNxOHZCFe2a2q63Q3IKuORhbUclxy3A8DNDa2LFR8y5cpCG2QZ1KqECu5GZzlRTe9iWvYG4GeYjwRFjRYAYpjGKYAYpjGKZBBhAwkCmU9qeTPrL8ZcMp7U8mfWX4wMUxTGMUzQgxTGMUyCDIMkyDMhTIMkyDA0oCEBIJEICEoI0WNKCSu8dokSV3jtEo6GEITIaAhASiYQhKCAhASiYEwhA2hsUNUemvCApmAd1Co5D01uh5irkhb9DXWQdgOFLlwFAZicubiBHa9gd/EYW3X3MZTfAVxYZSbaCzqQLMNAb2HGK6ecQfB4gbw/GYDVxYs+Xeb8pK3v8AjJ+izs/Za1UQ3qXZ0DfcCqaipcFhZhxvGDGx0K2uZWxmzmppnLA2fJoCLuM2YC/IAEa/KKic8RcJWymwIACPbOB4w4ptffb8ZOJwtdaamoOIpIGqGzG172N72VRryKBuAj++ilFjRZZAYpjGKYAYpjGKZBBhAwkCmU9qeTPrL8ZcMp7U8mfWX4wMUxTGMUzQgxTGMUyCDIMkyDMhTIMkyDA0oCEBIJEICEoI0WNKCSu8dokSV3jtEo6GEITIaAhASiYQhKCAhASiZbOB/wDLQ95e39LypLKUqRAJq2NtRwbGxtzjz3F4DpQfkq0xr/y21uf23+cTzos7m2fLazDM5AuNBbz6z0NCjfy1xlOvBsLMMult9iCdfNK9VVFsrZuKCeLlseUf954gWvor7uFp2J/5xbW41/r7Z5HCnLm4Sn4pa3Ca+Lfdz8nbJFCj/wA1v/W5kNQpclYHUf7bjS/7awPPE4bIL56bagcR828X3StPauiC2R82hvxStj+s8YAYpjGKYAYpjGKZBBhAwkCmU9qeTPrL8ZcMp7U8mfWX4wMUxTGMUzQgxTGMUyCDIMkyDMhTIMkyDA0oCEBIJEICEoI0WNKCSp1HbIkrvHaJRr/WNP0vZD6wp+l7J6fRKfQE96GyxUDFKYIXLfUC2a9tCdd3JJ0Kv1hT9L2Q+sKfpeyXjsN7heBNyH0GvimzbjyGQ+xWUXNLTLe44wy5Q17g7rEay3gU/rBPS9kPrBPS9kf6LT6A/rKG0aaqwCi3F/UyxYXfrBPS9kBtBPS9kZMKlhxBuE9aGz1qMERAWN7C9r6X5T5o6Hh9YJ6Xsh9YJ6Xsl0bGbW1E6MAba8YgEC99dCD2a7oVdjlAS1KwDMCd4ut76j1TF4FL6wT0vZJ+sE9L2T0+iU+gJS2jSVcuUAXzfpNRYWPrBPS9kDtBPS9kmhhkKKSouVE96OzlqOERAWJsBe1z2k2joVfrCn6XskfWNP0vZL52K3/CfERvysAV5eW9rc9xvBEH2G430ToVBtrYkAgGx08YTN4Gedo0/S9kU7Qp+l7J7fRafQEp7RooqgqoBzfoY6Hqdo0/S9kg7Rp+l7JGDw1NkUlQTxviZZpbPR2CKi5mYAXIW5O7UmwkmwrHaNP0vZI+safpd2aC7Cdr5aBazKCV4wu1iNQbahlPYbyDsJsubgdALm2thpa4BvrcW57xeBnnaVP0u7K2OxaOmVb3uOS0vvgaakqUAIJBHMRvEp7Qw6LTuqgHMI6GUYpjGKZRBimMYpkEGQZJkGZCmQZJkGBpQEICQSIQEJQRosaUEld47RIkrvHaJR0MsYSpUDBaRYOzoAF3lr2W3n1t+NpXljC06bFuEqFAEYqQhqZ2FrLoRa/P5pkWhXrWqZ6zI1MCyMSjsxcKyqN+YZix9U/glXE4kIM5qBHQhSQQGQHXJ5ri2k19obSxGHNFKNitTD0XJamtZsXUdQXLlgWc5iUy30sJV/iHD0lrVgKhDI1NUpZWqBVKKzItS9lCOzgLb7skDGmVtXx19T9TNWZW1fHX1P1M6R6NSnuHYI6OVNwbHX/7Ep7h2CWMHTR3C1HKJY3bgzUseTiggwLgeuHdKtVqbIjvZyVZnVdF13swNh5p5Va+INPM5co7MuZr2YgqzAHl1CH8o5pqYjaFbDUMO1E24SiS9VkWo1SoHZeDLODxUVVAUaWMTb1Gnn47mk4wtB+BFNmVKzgs6KL2pC+V7en5piJGDM/an3Pz/wCM0Jn7U+5+f/GdafRcw3k09RfhPRHKm4JB11Gk88N5NPUX4TQ2Ph6dTE0qdQ8VnAPGy5uZb8mY2W/pSSLmzcJjMVmdXfIGOZyxbVbNxUW7uw0OVQdWG68bE0qxVmpYjhgFqZ1P8qqgCFXJpMcxGRmF1zWBa9tZ4bQ2nisi02U4emrPZER6C5tM2a5uzDTeSR+MvbIxtZzeqgYLhcTbEMjF6Y4KoFY1PvC5ygNfeANQJzm/o5oyhtXxF9f9DL8obV8RfX/Qzcej0wHk1/N/cZYViCCDYggg8xG6V8B5Nfzf3GXcHTR6qI7ZVaqis2nFUsAza8wJP4SSNHZWExmK4lJjlVkuWYBFP3d+rGynRQTYWtaWnoYjMRQxJq1FdS1N1bD1S68ZStOpY1LZb2F20HF3Ty2tjsTSDYdaZw1Fa7DKivTzsNFz1Cbucq332O/mtY/h7HV3rUFqUhWRaykVXQs9FFYMWWqdyoRmsbjQjlnOdjmSb67/AOt5S2p5M+svxlz/AL2yntTyZ9ZfjNjFMUxjFM0IMUxjFMggyDJMgzIUyDJMgwNKAhASCRCAhKCNFjSgkrvHaJEld47RKOhj02CspKhgGUlTezAHcba2O7QxITI2MNtusi1wtapSzcZEpWSmrM4zAKPFGUtbLY3AuZQxGJ4RUBRAUQqWVcrVNSbvyM2ts1rnlvLNPFURTAK3cU6g1oUiC7WAu172AFwfGuebiyi75mLWUXO5RYDsERAiZW1fHX1P1M1ZlbV8dfU/UzcejUp7h2CNFp7h2CSIGzgttujVWV3oK9NyqUQEQVQoCXU3sNBdvGPPM+vijURVZULB3YvY8I+Y3Odr8fW9iddd9p7YbEUhTCuCTarc8DTYi6Oq5WJBNiwbXmFrW1qVHzG9lGg0UZRoLbpmI7CTP2p9z8/+M0Jn7U+5+f8AxnSn0XMN5NPUX4RzEw3k09RfhLeGwb1AxUrxct7tlve9rewySL2Cx+LKnLiCVzIuWoeHAP3bI6sL6kAAZjrYGxtV2li8Q5KVa7OCQSoq50BGnig5QRbcBzT2GHxFJeK6BQWOjodSoDb/AEdD2WnmdlVSd6G5PKVtvvcEA8h5OUc4vnoZxlDaviL6/wChmliKRRijWuLbjcagH9Zm7V8RfX/QywPTAeTX839xnuZ4YDya/m/uMv4XCNUzZSoyrc5jbTzSSLmB2hiwjZMQwREUFHfOmQsAOI4KWBtvHZPPaeNxbXSrXZhdlNNalkXIxWxprZVFxcaeeN9CxFNGs1PKcrEZ0bVSwGh5d+nM3NeLU2dWqE1CyMWZrnNYk6EnUC++9xodSL2Mx0MwyntTyZ9ZfjNPF4Zqb5Gte3Ibgi5H6TM2p5M+svxmoGKYpjGKZoQYpjGKZBBkGSZBmQpkGSZBgaUBCAkEiEBCUEaLGlBJXeO0SJIlHQz0oVMjBrA2vofOCPbrcHnAnPfSH6bd4w+kP027xiw6upjw3+1RBzKbhOYg8vPbXti4rFCp9ympvqVBuRawvf8AGcx9Ifpv3jD6Q/TfvGLDemVtXx19T9TK30h+m3eMV3ZtWJPabyxA36e4dgj0nysGsDZgbHUGx3GYIr1Ok3eMgYh+m/eMuI6qrjgyleCpAlbZspzDz3vvtIxOMFRbcHTU3HGUWNtb+0kbuacv9Ifpv3jD6Q/TfvGMRuzP2p9z8/8AjKn0ip0m7xiu7N4xJ7TeaiBs4byaeovwjmYgrOBYM1vWMU4h+m/eMYjctItMM4h+m3eMg4h+m3eMmI3DKG1fEX1/0MoHEP027xiPVLeMzHtJMlhrYDya/m/uM9zMFa7AWDEDmBIgcS/TfvGSYG5aRaYRxL9N+8YHEv037xksN2U9qeTPrL8ZmnEv037xnnUrswsWJHnJMWHmYpjGKZRBimMYpkEGQZJkGZCmQZJkGB//2Q==',
    name: 'weather app',
    description: 'Este es otro proyeto',
    visitar: '/',
    github: '/'
  },
  {
    img: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cufjzu9x8i7iuxmttzyf.png',
    name: 'Rick and morty app',
    description: 'Este es otro proyecto',
    visitar: '/',
    github: '/'
  }
]

export default Proyects