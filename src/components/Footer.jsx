
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import './styles/main.css'

const Footer = () =>    
<footer class="text-center">

    <div class="container p-4 pb-0">

        <section>

        <a class="btn btn-floating m-1" href="#!"role="button">
            <FontAwesomeIcon icon={faLinkedinIn} />
        </a>

      
        <a class="btn btn-floating m-1" href="#!"role="button">
            <FontAwesomeIcon icon={faGithub} />
        </a>

        </section>

     </div>

    <div class="text-center">© 2023 Copyright:<a class="text-decoration-none" href="https://jaspercyz.com/"> jaspercyz.com</a></div>

</footer>


export default Footer;
