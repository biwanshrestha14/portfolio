// Import profile and tech stack images
import cssImage from "../../assets/images/css.png"
import djangoImage from "../../assets/images/django.png"
import dockerImage from "../../assets/images/docker.png"
import gitImage from "../../assets/images/git.png"
import htmlImage from "../../assets/images/html.png"
import jsImage from "../../assets/images/js.png"
import jwtImage from "../../assets/images/jwt.png"
import matplotlibImage from "../../assets/images/matplotlib.png"
import mongodbImage from "../../assets/images/mongodb.png"
import nodeImage from "../../assets/images/node.png"
import pandasImage from "../../assets/images/pandas.png"
import mysqlImage from "../../assets/images/pngwing.com (1).png"
import postmanImage from "../../assets/images/postman.png"
import profileImage from "../../assets/images/profile-pic (2).png"
import pythonImage from "../../assets/images/python.png"
import reactImage from "../../assets/images/react.png"
import tailwindImage from "../../assets/images/tailwind.png"
import typescriptImage from "../../assets/images/typescript.png"

const Profile = () => {
    return (
        <section className="profile flex flex-col lg:flex-row overflow-hidden">
            <div className="lol skills w-full md:w-[50%]">
                <div className="flex space-x-4 items-center px-4 md:space-x-4 ">
                    <img
                        className=" w-[50%] rounded-lg md:hidden"
                        src={profileImage || "/placeholder.svg"}
                        alt="Biwan Shrestha"
                    />
                    <img className="hidden md:block w-[50%]" src={profileImage || "/placeholder.svg"} alt="Biwan Shrestha" />
                    <div className="flex flex-col leading-8 text-[var(--text)]">
                        <h2>Name: Biwan Shrestha</h2>
                        <h2>Job role: Software Developer</h2>
                        <h2>Address: Hattiban, lalitpur</h2>
                    </div>
                </div>

                <div className="mt-8 px-4">
                    <h1 className="text-3xl font-bold text-center text-[var(--text)] mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        🛠️ Tech Stack
                    </h1>

                    <div className="space-y-8">
                        {/* Proficient Section */}
                        <div className="relative">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/30"></div>
                                <h2 className="text-2xl font-bold text-[var(--text)] tracking-wide">Proficient</h2>
                                <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                                {[
                                    { img: htmlImage, name: "HTML", color: "from-orange-400 to-red-500" },
                                    { img: cssImage, name: "CSS", color: "from-blue-400 to-blue-600" },
                                    { img: jsImage, name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
                                    { img: tailwindImage, name: "Tailwind", color: "from-cyan-400 to-blue-500" },
                                    { img: gitImage, name: "Git", color: "from-orange-500 to-red-600" },
                                    { img: reactImage, name: "React", color: "from-cyan-400 to-blue-500" },
                                    { img: mysqlImage, name: "MySQL", color: "from-blue-500 to-blue-700" },
                                    { img: mongodbImage, name: "MongoDB", color: "from-green-500 to-green-700" },

                                ].map((tech, index) => (
                                    <div key={index} className="group relative">
                                        <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-32 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-green-500/30 hover:shadow-xl hover:shadow-green-500/20">
                                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <img
                                                className="w-10 h-10 object-contain mb-2 transition-transform duration-300 group-hover:scale-110"
                                                src={tech.img || "/placeholder.svg"}
                                                alt={tech.name}
                                            />
                                            <h3 className="text-xs font-semibold text-[var(--text)] text-center leading-tight">{tech.name}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Intermediate Section */}
                        <div className="relative">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/30"></div>
                                <h2 className="text-2xl font-bold text-[var(--text)] tracking-wide">Intermediate</h2>
                                <div className="flex-1 h-px bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                                {[

                                    { img: nodeImage, name: "Node.js", color: "from-green-400 to-green-600" },
                                    { img: postmanImage, name: "Postman", color: "from-orange-400 to-orange-600" },
                                    { img: jwtImage, name: "JWT", color: "from-purple-400 to-purple-600" },
                                    { img: dockerImage, name: "Docker", color: "from-blue-400 to-blue-600" },
                                    { img: typescriptImage, name: "TypeScript", color: "from-blue-500 to-blue-700" },
                                    { img: djangoImage, name: "Django", color: "from-green-600 to-green-800" }
                                ].map((tech, index) => (
                                    <div key={index} className="group relative">
                                        <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-32 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/20">
                                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <img
                                                className="w-10 h-10 object-contain mb-2 transition-transform duration-300 group-hover:scale-110"
                                                src={tech.img || "/placeholder.svg"}
                                                alt={tech.name}
                                            />
                                            <h3 className="text-xs font-semibold text-[var(--text)] text-center leading-tight">{tech.name}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Beginner Section */}
                        <div className="relative">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg shadow-red-500/30"></div>
                                <h2 className="text-2xl font-bold text-[var(--text)] tracking-wide">Beginner</h2>
                                <div className="flex-1 h-px bg-gradient-to-r from-red-500/50 to-transparent"></div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {[


                                    { img: pythonImage, name: "Python ML/AI", color: "from-green-400 to-blue-500" },
                                    { img: pandasImage, name: "Pandas", color: "from-green-400 to-green-600" },
                                    { img: matplotlibImage, name: "Matplotlib", color: "from-red-400 to-red-600" }
                                ].map((tech, index) => (
                                    <div key={index} className="group relative">
                                        <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-32 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-red-500/30 hover:shadow-xl hover:shadow-red-500/20">
                                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <img
                                                className="w-10 h-10 object-contain mb-2 transition-transform duration-300 group-hover:scale-110"
                                                src={tech.img || "/placeholder.svg"}
                                                alt={tech.name}
                                            />
                                            <h3 className="text-xs font-semibold text-[var(--text)] text-center leading-tight">{tech.name}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lol about mt-10 m-auto px-10 lg:w-[40%] relative">
                <h1 className="text-4xl text-[var(--salmon)] text-center">About Me</h1>
                <p className="text-xl text-[var(--text)] mt-5 lg:text-2xl ">
                    Hi, I am Biwan, a final year CSIT student at Tribhuvan University with strong interest in web development and backend engineering. I work with modern front-end tools such as HTML, CSS, JavaScript, and React to build responsive and user focused interfaces. I also work with Node.js and Django for backend development, building secure and scalable server-side logic.
                    I enjoy solving problems, writing clean code, and turning ideas into working products. I stay consistent with learning new technologies, improving development practices, and building real projects. I value teamwork, clear communication, and time management while working on collaborative tasks.
                    I aim to start my career as a software developer where I grow through real world projects, mentorship, and continuous learning.
                </p>
                <ul>
                    <li className="text-sm lg:text-md">
                        <span className="text-[var(--primary)]">Profile:</span>
                        <span className="text-[var(--text)]"> Full-Stack Developer (Backend Focus)</span>
                    </li>
                    <li className="text-sm lg:text-md">
                        <span className="text-[var(--primary)]">Domain:</span>
                        <span className="text-[var(--text)]">Web Development & Backend Engineering</span>
                    </li>
                    <li className="text-sm lg:text-md">
                        <span className="text-[var(--secondary)]">Education:</span>
                        <span className="text-[var(--text)]">

                            Bachelor of Science in Computer Science and Information Technology (4rd Year)
                        </span>
                    </li>
                    <li className="text-sm lg:text-md">
                        <span className="text-[var(--primary)]">Language:</span>
                        <span className="text-[var(--text)]"> English, Hindi, Nepali</span>
                    </li>
                    <li className="text-sm lg:text-md">
                        <span className="text-[var(--primary)]">Other Skills:</span>
                        <span className="text-[var(--text)]">
                            {" "}
                            Problem-Solving, Creativity, Technical Proficiency, Communication, Time Management, Adaptability,
                            Attention to Detail
                        </span>
                    </li>
                    <li id="resume" className="text-sm lg:text-md">
                        <span className="text-[var(--primary)]">Interests:</span>
                        <span className="text-[var(--text)]">
                            {" "}
                            Traveling, Reading Books, Listening to Music, Watching Anime, Playing Online Games
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Profile
