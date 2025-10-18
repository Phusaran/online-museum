export function AboutPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">About Us</h1>

      <div className="space-y-4 text-base-content/90">
        <p>
          <strong>Company:</strong> BU SOFTWARE Co., Ltd.
          <br />
          <strong>Address:</strong> Bangkok University (Main Campus – Rangsit)
          <br />
          9/1 Moo 5, Khlong Nueng, Khlong Luang District, Pathum Thani 12120,
          Thailand
        </p>

        <p>
          <strong>About the Company:</strong>
          <br />
          BU SOFTWARE Co., Ltd. was founded with the mission to develop and
          deliver high-quality software and web solutions. Our focus is on
          creating innovative digital products that meet real business and user
          needs. With a strong team of developers and designers, we specialize in
          building web applications, designing intuitive UX/UI, and providing
          end-to-end IT solutions for organizations of all sizes.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Information</h2>

          <div className="space-y-3">
            <p>
              <strong>Primary Contact:</strong>
              <br />
              Mr. Phusarun Prasansri
              <br />
              Phone: +66 92 187 2645
              <br />
              Email: phusarun.pras@bumail.net
            </p>

            <p>
              <strong>Secondary Contact:</strong>
              <br />
              Mr. Issarayush Thipthong
              <br />
              Phone: +66 98 919 0541
              <br />
              Email: issarayush.thip@bumail.net
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}