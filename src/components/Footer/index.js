import { MdOutlineMailOutline } from "react-icons/md";
import { Logo } from "../SVG";
import styles from "./styles.module.scss";
export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.containerFooter}>
                <div className={styles.warrapFooter}>
                    <section className={styles.about}>
                        <h2>About</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <address>
                            <p>
                                <span>Email :</span> test@test.test
                            </p>
                            <p>
                                <span>Phone :</span> 4002 - 8922
                            </p>
                        </address>
                    </section>

                    <section className={styles.links}>
                        <nav>
                            <h3>Quick Link</h3>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Blog</li>
                                <li>Archived</li>
                                <li>Author</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                        <nav>
                            <h3>Category</h3>
                            <ul>
                                <li>Lifestyle</li>
                                <li>Technology</li>
                                <li>Travel</li>
                                <li>Business</li>
                                <li>Economy</li>
                                <li>Sports</li>
                            </ul>
                        </nav>
                    </section>

                    <section className={styles.containerNewsLetter}>
                        <form className={styles.newsLetter}>
                            <h3>Weekley Newsletter</h3>
                            <p>Get blog articles and offers via email</p>
                            <div className={styles.warrapInput}>
                                <input type="text" placeholder="Your Email" />
                                <MdOutlineMailOutline />
                            </div>
                            <button>Subscribe</button>
                        </form>
                    </section>
                </div>

                <div className={styles.endingFooter}>
                    <div className={styles.logo}>
                        <Logo />
                        <div>
                            <h2>
                                Meta <span>Blog</span>
                            </h2>
                            <p>© JS Template 2023. All Rights Reserved.</p>
                        </div>
                    </div>
                    <ul>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
