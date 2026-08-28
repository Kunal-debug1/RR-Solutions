import Link from 'next/link';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container d-flex flex-wrap justify-content-center justify-content-md-between gap-2">
        <span>
          <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
          {' '}Hyderabad, India &middot; Serving businesses worldwide
        </span>
        <Link href="mailto:info.rrsolutionsofficial@gmail.com">
          info.rrsolutionsofficial@gmail.com
        </Link>
      </div>
    </div>
  );
}
