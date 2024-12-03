export function LocationSection() {
  return (
    <section className="h-1/2 w-full section" data-section="location">
      <iframe
        className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.0701727431547!2d-46.88334242362878!3d-23.204113148566734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf26c8f3823ce5%3A0x1208180bf2d7a69e!2sRua%20Cica%2C%20369%20-%2034%20-%20Vila%20Garcia%2C%20Jundia%C3%AD%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1733156143813!5m2!1spt-BR!2sbr"
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
