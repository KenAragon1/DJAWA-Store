import { Link } from "@inertiajs/react";

export default function Pagination({ paginationData }) {
    const { current_page, last_page, links } = paginationData;
    return (
        <div>
            <p>
                Page {current_page} of {last_page}
            </p>
            <div className="join">
                {links.map((link) => {
                    if (Number(link.label)) {
                        return (
                            <Link
                                href={link.url}
                                className="join-item btn aspect-square"
                            >
                                {link.label}
                            </Link>
                        );
                    }
                })}
            </div>
        </div>
    );
}
