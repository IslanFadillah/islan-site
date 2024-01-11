document.addEventListener("DOMContentLoaded", function () {
    // Mengambil semua tautan navigasi dan menambahkan event listener untuk smooth scroll
    const navLinks = document.querySelectorAll('header a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Mengambil ID elemen target dari atribut href
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Melakukan smooth scroll ke elemen target
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Menambahkan event listener untuk animasi saat menggulir ke bagian keterampilan dan proyek
    window.addEventListener('scroll', function () {
        const skillsSection = document.getElementById('skills');
        const projectsSection = document.getElementById('projects');

        // Jika bagian keterampilan muncul dalam viewport, tambahkan kelas 'animate' dan jalankan fungsi animasi keterampilan
        if (isInViewport(skillsSection)) {
            skillsSection.classList.add('animate');
            animateSkills();
        }

        // Jika bagian proyek muncul dalam viewport, tambahkan kelas 'animate' dan jalankan fungsi animasi proyek
        if (isInViewport(projectsSection)) {
            projectsSection.classList.add('animate');
            animateProjects();
        }
    });

    // Fungsi untuk memeriksa apakah suatu elemen berada dalam viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Fungsi untuk animasi keterampilan
    function animateSkills() {
        const skillsList = document.querySelectorAll('#skills ul li');

        // Menggunakan setTimeout untuk menambahkan animasi dengan jeda waktu
        skillsList.forEach(function (skill, index) {
            setTimeout(function () {
                skill.style.opacity = 1;
                skill.style.transform = 'translateY(0)';
            }, 150 * index);
        });
    }

    // Fungsi untuk animasi proyek
    function animateProjects() {
        const projects = document.querySelectorAll('.project');

        // Menggunakan setTimeout untuk menambahkan animasi dengan jeda waktu
        projects.forEach(function (project, index) {
            setTimeout(function () {
                project.style.opacity = 1;
                project.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    }
});