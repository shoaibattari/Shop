import React from "react";

function Location() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57897.33285907992!2d67.0583856!3d24.912191400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1688064723628!5m2!1sen!2s"
        className=" w-full rounded-3xl"
        height={450}
        //  style={{ border: 10 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Location;
