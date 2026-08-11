document.addEventListener("DOMContentLoaded", function () {


/* ===========================REGISTER==================================================== */

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {

        registerForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const password =
                document.getElementById("password").value;

            const confirmPassword =
                document.getElementById("confirmPassword").value;


            if (password !== confirmPassword) {

                alert("Passwords do not match.");

                return;
            }


            if (!/^\d{10}$/.test(phone)) {

                alert("Please enter a valid 10-digit phone number.");

                return;
            }


            let users =
                JSON.parse(localStorage.getItem("users")) || [];


            const existingUser =
                users.find(function (user) {

                    return user.email.toLowerCase() ===
                        email.toLowerCase();

                });


            if (existingUser) {

                alert("An account with this email already exists.");

                return;
            }


            const newUser = {

                id: Date.now(),

                name: name,

                email: email,

                phone: phone,

                password: password

            };


            users.push(newUser);


            localStorage.setItem(
                "users",
                JSON.stringify(users)
            );


            alert(
                "Registration successful! Please login."
            );


            registerForm.reset();


            window.location.href = "login.html";

        });

    }



    /* ====================USER + ADMIN LOGIN==================================================== */

    const loginForm =
        document.getElementById("loginForm");


    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const email =
                document.getElementById("loginEmail").value.trim();

            const password =
                document.getElementById("loginPassword").value;

            const loginType =
                document.getElementById("loginType").value;



            /* ================= ADMIN LOGIN ================= */

            if (loginType === "admin") {

                const adminEmail =
                    "admin@cloudbuspass.com";

                const adminPassword =
                    "Admin@123";


                if (
                    email.toLowerCase() === adminEmail &&
                    password === adminPassword
                ) {

                    localStorage.setItem(
                        "adminLoggedIn",
                        "true"
                    );

                    console.log(
                        "Admin login state:",
                        localStorage.getItem("adminloggedIn")
                    );


                    alert(
                        "Admin login successful!"
                    );


                    window.location.href =
                        "admin-dashboard.html";

                } else {

                    alert(
                        "Invalid admin email or password."
                    );

                }


                return;
            }



            /* ================= USER LOGIN ================= */

            const users =
                JSON.parse(
                    localStorage.getItem("users")
                ) || [];


            const user =
                users.find(function (registeredUser) {

                    return (
                        registeredUser.email.toLowerCase() ===
                        email.toLowerCase() &&

                        registeredUser.password ===
                        password
                    );

                });


            if (user) {

                localStorage.setItem(
                    "loggedInUser",
                    JSON.stringify(user)
                );


                alert(
                    "Login successful!"
                );


                window.location.href =
                    "dashboard.html";

            } else {

                alert(
                    "Invalid email or password."
                );

            }

        });

    }



    /* ===========ADMIN DASHBOARD SECURITY===================================================== */

    if (
        window.location.pathname.endsWith(
            "admin-dashboard.html"
        )
    ) {

        const adminLoggedIn =
            localStorage.getItem("adminLoggedIn");


        if (adminLoggedIn !== "true") {

            window.location.href =
                "login.html";

        }

    }



    /* ===================APPLY PASS================== */

    const applyPassForm =
        document.getElementById("applyPassForm");


    if (applyPassForm) {

        const loggedInUser =
            JSON.parse(
                localStorage.getItem("loggedInUser")
            );


        if (loggedInUser) {

            const passengerName =
                document.getElementById("passengerName");

            const passengerEmail =
                document.getElementById("passengerEmail");

            const passengerPhone =
                document.getElementById("passengerPhone");


            if (passengerName) {

                passengerName.value =
                    loggedInUser.name;

            }


            if (passengerEmail) {

                passengerEmail.value =
                    loggedInUser.email;

            }


            if (passengerPhone) {

                passengerPhone.value =
                    loggedInUser.phone;

            }

        }


        applyPassForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const passengerName =
                    document.getElementById(
                        "passengerName"
                    ).value.trim();


                const passengerEmail =
                    document.getElementById(
                        "passengerEmail"
                    ).value.trim();


                const passengerPhone =
                    document.getElementById(
                        "passengerPhone"
                    ).value.trim();


                const busRoute =
                    document.getElementById(
                        "busRoute"
                    ).value;


                const passType =
                    document.getElementById(
                        "passType"
                    ).value;



                if (!/^\d{10}$/.test(passengerPhone)) {

                    alert(
                        "Please enter a valid 10-digit phone number."
                    );

                    return;
                }



                let applications =
                    JSON.parse(
                        localStorage.getItem(
                            "applications"
                        )
                    ) || [];



                const application = {

                    id: Date.now(),

                    passengerName:
                        passengerName,

                    email:
                        passengerEmail,

                    phoneNumber:
                        passengerPhone,

                    busRoute:
                        busRoute,

                    passType:
                        passType,

                    status:
                        "Pending",

                    appliedDate:
                        new Date().toLocaleDateString()

                };



                applications.push(
                    application
                );


                localStorage.setItem(
                    "applications",
                    JSON.stringify(
                        applications
                    )
                );


                alert(
                    "Bus pass application submitted successfully!"
                );


                applyPassForm.reset();


                window.location.href =
                    "status.html";

            }
        );

    }



    /* ========================STATUS PAGE=================== */

    const statusContainer =
        document.getElementById(
            "statusContainer"
        );


    if (statusContainer) {

        const loggedInUser =
            JSON.parse(
                localStorage.getItem(
                    "loggedInUser"
                )
            );


        const applications =
            JSON.parse(
                localStorage.getItem(
                    "applications"
                )
            ) || [];



        if (!loggedInUser) {

            statusContainer.innerHTML = `

                <div class="status-card">

                    <div class="status-icon">
                        🔐
                    </div>

                    <h2>
                        Login Required
                    </h2>

                    <p>
                        Please login to view your application status.
                    </p>

                </div>

            `;

        } else {


            const userApplication =
                applications
                    .filter(function (application) {

                        return (
                            application.email.toLowerCase() ===
                            loggedInUser.email.toLowerCase()
                        );

                    })
                    .pop();



            if (!userApplication) {

                statusContainer.innerHTML = `

                    <div class="status-card">

                        <div class="status-icon">
                            📋
                        </div>

                        <h2>
                            No Application Found
                        </h2>

                        <p>
                            You have not submitted a bus pass application yet.
                        </p>

                    </div>

                `;

            } else {


                let statusClass =
                    "status-pending";


                if (
                    userApplication.status ===
                    "Approved"
                ) {

                    statusClass =
                        "status-approved";

                }


                if (
                    userApplication.status ===
                    "Rejected"
                ) {

                    statusClass =
                        "status-rejected";

                }



                statusContainer.innerHTML = `

                    <div class="status-card">

                        <div class="status-icon">
                            📋
                        </div>

                        <h2>
                            Application Details
                        </h2>

                        <p>
                            Your latest bus pass application.
                        </p>


                        <div class="status-details">

                            <div class="status-row">

                                <span>
                                    Passenger Name
                                </span>

                                <span>
                                    ${userApplication.passengerName}
                                </span>

                            </div>


                            <div class="status-row">

                                <span>
                                    Email
                                </span>

                                <span>
                                    ${userApplication.email}
                                </span>

                            </div>


                            <div class="status-row">

                                <span>
                                    Phone
                                </span>

                                <span>
                                    ${userApplication.phoneNumber}
                                </span>

                            </div>


                            <div class="status-row">

                                <span>
                                    Bus Route
                                </span>

                                <span>
                                    ${userApplication.busRoute}
                                </span>

                            </div>


                            <div class="status-row">

                                <span>
                                    Pass Type
                                </span>

                                <span>
                                    ${userApplication.passType}
                                </span>

                            </div>


                            <div class="status-row">

                                <span>
                                    Applied Date
                                </span>

                                <span>
                                    ${userApplication.appliedDate}
                                </span>

                            </div>


                            <div class="status-row">

                                <span>
                                    Status
                                </span>

                                <span>

                                    <span
                                        class="status-badge ${statusClass}"
                                    >
                                        ${userApplication.status}
                                    </span>

                                </span>

                            </div>

                        </div>

                    </div>

                `;

            }

        }

    }



    /*============ADMIN DASHBOARD================= */

    const applicationTableBody =
        document.getElementById(
            "applicationTableBody"
        );


    if (applicationTableBody) {


        function loadAdminApplications() {


            const applications =
                JSON.parse(
                    localStorage.getItem(
                        "applications"
                    )
                ) || [];



            /* ---------- STATISTICS ---------- */

            const total =
                applications.length;


            const pending =
                applications.filter(
                    function (application) {

                        return application.status ===
                            "Pending";

                    }
                ).length;


            const approved =
                applications.filter(
                    function (application) {

                        return application.status ===
                            "Approved";

                    }
                ).length;


            const rejected =
                applications.filter(
                    function (application) {

                        return application.status ===
                            "Rejected";

                    }
                ).length;



            document.getElementById(
                "totalApplications"
            ).textContent = total;


            document.getElementById(
                "pendingApplications"
            ).textContent = pending;


            document.getElementById(
                "approvedApplications"
            ).textContent = approved;


            document.getElementById(
                "rejectedApplications"
            ).textContent = rejected;



            /* ---------- NO APPLICATIONS ---------- */

            if (applications.length === 0) {

                applicationTableBody.innerHTML = `

                    <tr>

                        <td colspan="8">
                            No applications found.
                        </td>

                    </tr>

                `;

                return;
            }



            /* ---------- DISPLAY APPLICATIONS ---------- */

            applicationTableBody.innerHTML = "";


            applications.forEach(
                function (application) {


                    let statusClass =
                        "pending";


                    if (
                        application.status ===
                        "Approved"
                    ) {

                        statusClass =
                            "approved";

                    }


                    if (
                        application.status ===
                        "Rejected"
                    ) {

                        statusClass =
                            "rejected";

                    }



                    let actionButtons =
                        "";



                    if (
                        application.status ===
                        "Pending"
                    ) {

                        actionButtons = `

                            <button
                                class="action-btn approve-btn"
                                onclick="updateApplicationStatus(${application.id}, 'Approved')"
                            >
                                Approve
                            </button>

                            <button
                                class="action-btn reject-btn"
                                onclick="updateApplicationStatus(${application.id}, 'Rejected')"
                            >
                                Reject
                            </button>

                        `;

                    } else {

                        actionButtons = `
                            <span>
                                Completed
                            </span>
                        `;

                    }



                    const row =
                        document.createElement(
                            "tr"
                        );


                    row.innerHTML = `

                        <td>
                            ${application.id}
                        </td>

                        <td>
                            ${application.passengerName}
                        </td>

                        <td>
                            ${application.email}
                        </td>

                        <td>
                            ${application.phoneNumber}
                        </td>

                        <td>
                            ${application.busRoute}
                        </td>

                        <td>
                            ${application.passType}
                        </td>

                        <td>

                            <span
                                class="admin-status ${statusClass}"
                            >
                                ${application.status}
                            </span>

                        </td>

                        <td>
                            ${actionButtons}
                        </td>

                    `;


                    applicationTableBody.appendChild(
                        row
                    );

                }
            );

        }



        /* ---------- UPDATE STATUS ---------- */

        window.updateApplicationStatus =
            function (
                applicationId,
                newStatus
            ) {


                let applications =
                    JSON.parse(
                        localStorage.getItem(
                            "applications"
                        )
                    ) || [];



                const application =
                    applications.find(
                        function (item) {

                            return item.id ===
                                applicationId;

                        }
                    );



                if (application) {

                    application.status =
                        newStatus;


                    localStorage.setItem(
                        "applications",
                        JSON.stringify(
                            applications
                        )
                    );


                    alert(
                        "Application " +
                        newStatus.toLowerCase() +
                        " successfully!"
                    );


                    loadAdminApplications();

                }

            };



        loadAdminApplications();

    }



    /* =================DIGITAL PASS================ */

    const digitalPassContainer =
        document.getElementById(
            "digitalPassContainer"
        );


    if (digitalPassContainer) {


        const loggedInUser =
            JSON.parse(
                localStorage.getItem(
                    "loggedInUser"
                )
            );


        const applications =
            JSON.parse(
                localStorage.getItem(
                    "applications"
                )
            ) || [];



        if (!loggedInUser) {

            digitalPassContainer.innerHTML = `

                <div class="digital-card">

                    <div class="digital-icon">
                        🔐
                    </div>

                    <h2>
                        Login Required
                    </h2>

                    <p>
                        Please login to view your digital pass.
                    </p>

                </div>

            `;

        } else {


            const approvedApplication =
                applications
                    .filter(function (application) {

                        return (
                            application.email.toLowerCase() ===
                            loggedInUser.email.toLowerCase() &&

                            application.status ===
                            "Approved"
                        );

                    })
                    .pop();



            if (!approvedApplication) {

                digitalPassContainer.innerHTML = `

                    <div class="digital-card">

                        <div class="digital-icon">
                            🎫
                        </div>

                        <h2>
                            Digital Pass Not Available
                        </h2>

                        <p>
                            Your bus pass must be approved
                            before the digital pass is generated.
                        </p>

                    </div>

                `;

            } else {


                const passId =
                    "BP-" +
                    approvedApplication.id;



                digitalPassContainer.innerHTML = `

                    <div class="digital-card">

                        <div class="digital-icon">
                            🎫
                        </div>

                        <h2>
                            Bus Pass Approved
                        </h2>

                        <p>
                            Your digital bus pass is active.
                        </p>


                        <div class="digital-pass-details">


                            <div class="digital-row">

                                <span>
                                    Passenger Name
                                </span>

                                <span>
                                    ${approvedApplication.passengerName}
                                </span>

                            </div>


                            <div class="digital-row">

                                <span>
                                    Email
                                </span>

                                <span>
                                    ${approvedApplication.email}
                                </span>

                            </div>


                            <div class="digital-row">

                                <span>
                                    Phone
                                </span>

                                <span>
                                    ${approvedApplication.phoneNumber}
                                </span>

                            </div>


                            <div class="digital-row">

                                <span>
                                    Bus Route
                                </span>

                                <span>
                                    ${approvedApplication.busRoute}
                                </span>

                            </div>


                            <div class="digital-row">

                                <span>
                                    Pass Type
                                </span>

                                <span>
                                    ${approvedApplication.passType}
                                </span>

                            </div>


                            <div class="digital-row">

                                <span>
                                    Status
                                </span>

                                <span>
                                    Approved
                                </span>

                            </div>


                        </div>


                        <div class="pass-id">

                            <span>
                                PASS ID
                            </span>

                            <strong>
                                ${passId}
                            </strong>

                        </div>

                        <button
    class="download-pass-btn"
    onclick="window.print()"
>
    🖨️ Download / Print Pass
</button>


                    </div>

                `;

            }

        }

    }

    /* ===================USER LOGOUT=========================== */

const userLogout =
    document.getElementById("userLogout");

if (userLogout) {

    userLogout.addEventListener("click", function (event) {

        event.preventDefault();

        localStorage.removeItem("loggedInUser");

        alert("Logged out successfully!");

        window.location.href = "index.html";

    });

}

/* =================USER DASHBOARD SECURITY============================================ */

if (
    window.location.pathname.endsWith(
        "dashboard.html"
    )
) {

    const loggedInUser =
        localStorage.getItem("loggedInUser");


    if (!loggedInUser) {

        window.location.href =
            "login.html";

    }

}

/* =====================USER PAGE SECURITY============================================== */

const protectedUserPages = [
    "apply-pass.html",
    "status.html",
    "digitalpass.html"
];

const currentPage =
    window.location.pathname.split("/").pop();


if (protectedUserPages.includes(currentPage)) {

    const loggedInUser =
        localStorage.getItem("loggedInUser");


    if (!loggedInUser) {

        window.location.href =
            "login.html";

    }

}

});
