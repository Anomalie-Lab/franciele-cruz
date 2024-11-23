export function LocationSection() {
  return (
    <section className="w-full section" data-section="location">
      <iframe
        className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5392190217235!2d-46.3958526!3d-23.549069799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6505d7179b1b%3A0x8cf5cbbc0e33d7cf!2sRua%20Vereda%20Alfa%2C%2031%20-%20Lageado%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008450-384!5e0!3m2!1spt-BR!2sbr!4v1732396178369!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
