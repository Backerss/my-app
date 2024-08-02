'use client'


import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';


import ProfileIMG from '@/public/img/profile.jpg';
import bg_2 from '@/public/img/bg_2.png';
import website_vector from '@/public/img/website_vector.png';


import "bootstrap/dist/js/bootstrap.min.js"
import './home.css';

export default function Home() {

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);


  return (
    <div>

      <main className="container my-5 text-shadow ">
        <div className="row align-items-center text-center card-1">
          <div className="col-md-7 order-lg-1">
            <div className={`profile-image mb-3 ${animated ? 'animated' : ''}`}>
              <Image src={ProfileIMG} width={200} height={200} className="rounded-circle" alt="Profile Picture"></Image>
            </div>
          </div>
          <div className="col-md-5 text-start">
            <h1 className="display-4 text-bold">Asan Rodnuan</h1>
            <p className="lead">Web developer</p>
            <ul className="list-unstyled">
              <li><strong>Email:</strong> AsanRodnuan2546@gmail.com</li>
              <li><strong>Phone:</strong> +66 2 264 7041</li>
              <li><strong>Location:</strong> 37, Poland Street, New York, United States</li>
            </ul>
            <div className="social-links mt-3">
              <a href="#" className="me-3"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="me-3"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="me-3"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
              <Image src={bg_2} className="img-fluid card-2" alt=""></Image>
          </div>
          <div className="col-lg-6 text-lg-start text-center">
            <h1>About Me</h1>
            <p>สวัสดีครับ/ค่ะ ผม/ดิฉัน [ชื่อของคุณ] เป็นนักออกแบบกราฟิกที่มีประสบการณ์กว่า 5 ปีในการออกแบบโลโก้ แบรนด์ดิ้ง และสื่อสิ่งพิมพ์ต่างๆ ผม/ดิฉันหลงใหลในการสร้างสรรค์ผลงานที่มีเอกลักษณ์และตอบโจทย์ความต้องการของลูกค้า ขอเชิญชวนทุกท่านชมผลงานของผม/ดิฉันและร่วมพูดคุยกันผ่านทางเว็บไซต์นี้ ขอบคุณครับ/ค่ะ
            </p>
          </div>
        </div>

        <div className="row mt-5 text-dark">
          <div className="col-lg-3">
        
            <div class="card">
            <Image src={bg_2} className="img-fluid" alt=""></Image>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                b5
              </div>
            </div>

          </div>

          <div className="col-lg-3">
        
        <div class="card">
        <Image src={bg_2} className="img-fluid" alt=""></Image>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            b5
          </div>
        </div>

      </div>

      <div className="col-lg-3">
        
        <div class="card">
        <Image src={bg_2} className="img-fluid" alt=""></Image>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            b5
          </div>
        </div>

      </div>
      <div className="col-lg-3">
        
        <div class="card">
        <Image src={bg_2} className="img-fluid" alt=""></Image>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            b5
          </div>
        </div>

      </div>
        </div>


        <div className='row mt-5 text-white card-1'>
              <div className='col-lg-5 order-lg-1 order-1 text-lg-start text-center'>
                <h1>Hello World</h1>
                <p>This is a sample page for a Next.js application.</p>
                <a href="https://github.com/asanrodnuan/nextjs-template">View the source code on GitHub</a>
              </div>
              <div className='col-lg-6'>
              <Image src={website_vector} className="img-fluid"  alt="Profile Picture"></Image>
              </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-5 mx-auto card-2 bg-dark p-4">
            <h2 className='text-center'>Contact Me</h2>
            <form>
              <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label for="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>


        <div className="row mt-5">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">My Skills</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">HTML & CSS</li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">React.js</li>
                <li className="list-group-item">Next.js</li>
                <li className="list-group-item">Node.js</li>
                <li className="list-group-item">Python</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">My Projects</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Project A:</strong> A web application for managing tasks
                </li>
                <li className="list-group-item">
                  <strong>Project B:</strong> An e-commerce website
                </li>
                <li className="list-group-item">
                  <strong>Project C:</strong> A personal blog built with Next.js
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


        <footer className="text-center text-muted mt-5">
          &copy; 2022 Next.js App
        </footer>


      </main>
    </div>
  );
}
