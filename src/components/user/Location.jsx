import React from 'react'

function Location() {
    return (
        <div>
            <div className="flex-1 h-[700] text-center text-4xl font-bold py-7 text-[#410512] flex flex-col justify-center items-center gap-10">
                <span>Discover Qatar with RideQatar</span>

                <div className="w-full max-w-[800px] h-[500px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57746.950120821944!2d51.41789670349418!3d25.23071398822074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d0905852ba97%3A0x9536c9528976507!2sAin%20Khaled%2C%20Doha!5e0!3m2!1sen!2sqa!4v1745484298876!5m2!1sen!2sqa"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ain Khaled Map"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Location