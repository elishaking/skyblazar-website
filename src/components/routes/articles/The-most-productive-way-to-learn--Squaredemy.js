import React from 'react';
import { Helmet } from 'react-helmet';
import '../Articles.scss';

import image from '../../../assets/images/articles/The-most-productive-way-to-learn-img.png';

export default function Article() {
  return (
    <div>
      <Helmet>
        <meta name="description"
          content="Squaredemy is a comprehensive online learning platform with an aim to solve some major problems affecting the effectiveness of our educational institutions. At its core is a well-informed AI (Artificial Intelligence) expert named Squaredbot that creates a custom and interactive learning curriculum for students based on a critical assessment of their needs" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://skyblazar.com/articles/The-most-productive-way-to-learn" />
        <meta property="og:description"
          content="Squaredemy is a comprehensive online learning platform with an aim to solve some major problems affecting the effectiveness of our educational institutions. At its core is a well-informed AI (Artificial Intelligence) expert named Squaredbot that creates a custom and interactive learning curriculum for students based on a critical assessment of their needs" />
        <meta property="og:image" content="https://skyblazar.com/images/The-most-productive-way-to-learn-img.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="The most productive way learn: Squaredemy" />

        <title>The most productive way learn: Squaredemy</title>
      </Helmet>

      <p class="lead">
        Our education system has proven to be one of the most ineffective systems in history. A statistical research
        conducted in Nigeria classified about 90% of her graduates as unemployable because they lack vital skills to
        deliver on projects. This is an appalling result considering the fact that the wealth, strength and health of
        a
        nation is highly dependent on a well-educated and highly skilled workforce.
        </p>

      <div class="img">
        <img src={image} alt="The most productive way learn: Squaredemy" />
      </div>

      <p class="lead">
        <strong>Squaredemy</strong> is a comprehensive online learning platform with an aim to solve this problem. At
        its core is a well-informed AI (Artificial Intelligence) expert named Squaredbot that creates a custom and
        interactive learning curriculum for students based on a critical assessment of their needs. Through fun and
        engaging interactions with the students, Squaredbot will be able to determine their learning goals and current
        level of knowledge in order to create a well-refined systematic guide to help them productively achieve their
        goals. It will also have the ability to monitor and evaluate their progress over time, keeping track of any
        subtle improvements and constantly adjusting its teaching and recommendation style.
        </p>

      <p class="lead">
        Squaredemy’s approach will radically boost learning productivity and effectiveness because it tackles three
        major issues that plagues most of our learning institutions today. These issues include:
        </p>

      <h2>POOR INTERACTION</h2>
      <p>
        A study showed that 30% of students in a classroom loose interest in the lesson being taught because they are
        unable to engage in productive interactions with their tutors. Learning a new concept – especially in the STEM
        fields – can be very difficult and unless a student has some prior knowledge about the lesson, it can be tough
        to follow along. In most institutions, there is simply not enough time or resources for a tutor to interact
        with every student to make sure they all fully understand the lesson.
        </p>
      <p>
        This is where Squaredemy will thrive because its AI engine (Squaredbot) will be meticulously trained to
        interact with users in a fun, compassionate and engaging way, making the learning process less tedious. It
        will
        always be available to students on their smart phones (as a mobile app), browsers (as a web app), and desktops
        (as a cross-platform desktop application).
        </p>

      <h2>OUTDATED EDUCATIONAL RESOURCES</h2>
      <p>
        We live a face-paced world where ideas can become obsolete in a few months or years after they were classified
        as revolutionary. In most of our learning institutions today, tutors make use of textbooks and other learning
        resources that are outdated in terms of both theory and practice. By the time the students emerge as
        graduates,
        the skills and knowledge they possess are not very relevant to present industry demands. Except for some few
        graduates who go beyond their tutors to educate themselves with updated materials, many will have to spend
        extra years pursuing higher degrees or gaining experience in lower paying jobs. This is unfortunate because of
        the plethora of companies out there in desperate need of qualified staff to fill critical positions.
        </p>
      <p>
        To tackle this problem, Squaredemy will have access to several open-source libraries with relevant and updated
        content created by highly trained and international recognized tutors. The materials available will be broken
        down into small sized modules that are very easy to understand so that the students can be rewarded for small
        efforts, which will keep their motivation levels high.
        </p>

      <h2>OCCASIONAL FEEDBACK AND APPRAISAL</h2>
      <p>
        Most students require close monitoring and constant appraisal to stay motivated. This is rare and sometimes
        absent from some of our learning institutions, especially in developing regions.
        </p>
      <p>
        Squaredemy will gamify the entire learning process to make it more interesting and less tedious. Students are
        rewarded with experience points as they progress and each level of learning is aligned with their current
        skills. It will never be too fast or too slow for them.
        </p>
    </div>
  )
}
