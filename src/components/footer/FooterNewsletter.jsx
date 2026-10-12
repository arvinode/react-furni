import { Sofa } from "lucide-react";

export default function FooterNewsletter() {
  return (
    <section className="bg-[#152420] text-white">
      <div className="mx-auto flex max-w-[1300px] items-center justify-between gap-10 px-5 py-10">
        <div className="flex items-center gap-6">
          <Sofa
            size={54}
            strokeWidth={1.2}
            className="shrink-0 text-[#E2EDEF]"
          />

          <div>
            <h2 className="text-base font-bold">
              Important updates waiting for you!
            </h2>
            <p className="mt-1 text-sm text-white/80">
              Subscribe and grab 20% OFF!
            </p>
          </div>
        </div>

        <form
          onSubmit={(event) => event.preventDefault()}
          className="flex h-16 w-full max-w-[620px] items-center rounded-full border-2 border-[#274C4F] p-1.5"
        >
          <input
            type="email"
            required
            placeholder="Your email *"
            aria-label="Your email address"
            className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-white/55"
          />

          <button
            type="submit"
            className="h-full shrink-0 rounded-full bg-[#274C4F] px-6 text-sm font-bold transition hover:bg-[#456A6D]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}