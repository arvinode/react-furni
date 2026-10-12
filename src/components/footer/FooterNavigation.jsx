const footerColumns = [
  {
    title: "Shop Categories",
    links: [
      "Armchairs",
      "Beds",
      "Chairs",
      "Decor",
      "Sofas",
      "Storage",
      "Tables",
    ],
  },
  {
    title: "Useful Links",
    links: [
      "Careers",
      "Delivery",
      "Help Center",
      "Returns & Refunds",
      "Newsletter",
      "Status",
      "Testimonials",
    ],
  },
  {
    title: "Account",
    links: [
      "User Dashboard",
      "Wishlist",
      "Shipping & Delivery",
      "Affiliate Program",
      "Brand Assets",
      "Support",
      "Recommendations",
    ],
  },
  {
    title: "About Company",
    links: [
      "About Us",
      "Our Partners",
      "Locations",
      "Design Services",
      "How it Works",
      "Customers",
      "Other Info",
    ],
  },
];

export default function FooterNavigation() {
  return (
    <section className="bg-[#EEF4F5]">
      <div className="mx-auto grid max-w-[1300px] grid-cols-4 gap-10 px-5 py-10">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-5 text-sm font-bold text-[#152420]">
              {column.title}
            </h3>

            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[#42504B] transition hover:text-[#274C4F]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}