
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import './styles/main.css'

const Footer = () =>    
<footer class="text-center">

    <div class="container p-4 pb-0">

        <section class="mb-4">

        <a class="btn btn-floating m-1" href="#!"role="button">
            <FontAwesomeIcon icon={faLinkedinIn} />
        </a>

      
        <a class="btn btn-floating m-1" href="#!"role="button">
            <FontAwesomeIcon icon={faGithub} />
        </a>

        </section>

     </div>

    <div class="text-center p-4">© 2023 Copyright:<a href="https://jaspercyz.com/">jaspercyz.com</a></div>

</footer>


export default Footer;
