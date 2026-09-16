document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       HEADER
    ====================================================== */

    const header = document.getElementById("siteHeader");

    const handleHeaderScroll = () => {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    };

    window.addEventListener(
        "scroll",
        handleHeaderScroll,
        { passive: true }
    );

    handleHeaderScroll();


    /* =====================================================
       MOBILE MENU
    ====================================================== */

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const mainNav =
        document.getElementById("mainNav");

    if (mobileMenuButton && mainNav) {

        mobileMenuButton.addEventListener(
            "click",
            () => {

                const isOpen =
                    mainNav.classList.toggle("open");

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    isOpen
                );

                document.body.classList.toggle(
                    "menu-open",
                    isOpen
                );

            }
        );


        mainNav
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        mainNav.classList.remove("open");

                        mobileMenuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        document.body.classList.remove(
                            "menu-open"
                        );

                    }
                );

            });

    }


    /* =====================================================
       SCROLL REVEAL
    ====================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       ERP TABS
    ====================================================== */

    const erpTabs =
        document.querySelectorAll(".erp-tab");

    const erpPanels =
        document.querySelectorAll(".erp-panel");


    erpTabs.forEach(tab => {

        tab.addEventListener(
            "click",
            () => {

                const module =
                    tab.dataset.module;


                erpTabs.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


                erpPanels.forEach(panel => {

                    panel.classList.remove(
                        "active"
                    );

                });


                tab.classList.add("active");


                const targetPanel =
                    document.querySelector(
                        `.erp-panel[data-panel="${module}"]`
                    );


                if (targetPanel) {

                    targetPanel.classList.add(
                        "active"
                    );

                }

            }
        );

    });


    /* =====================================================
       HERO DASHBOARD PARALLAX
    ====================================================== */

    const dashboard =
        document.querySelector(
            ".dashboard-card"
        );

    const heroVisual =
        document.querySelector(
            ".hero-visual"
        );


    if (
        dashboard &&
        heroVisual &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        heroVisual.addEventListener(
            "mousemove",
            event => {

                const rect =
                    heroVisual.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateY =
                    ((x - centerX) / centerX) * 4;

                const rotateX =
                    ((centerY - y) / centerY) * 4;


                dashboard.style.transform =
                    `
                    perspective(1000px)
                    rotateY(${rotateY - 5}deg)
                    rotateX(${rotateX + 3}deg)
                    translateY(-3px)
                    `;

            }
        );


        heroVisual.addEventListener(
            "mouseleave",
            () => {

                dashboard.style.transform =
                    `
                    perspective(1000px)
                    rotateY(-5deg)
                    rotateX(3deg)
                    `;

            }
        );

    }


    /* =====================================================
       CURSOR GLOW
    ====================================================== */

    const cursorGlow =
        document.querySelector(
            ".cursor-glow"
        );


    if (
        cursorGlow &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;


        document.addEventListener(
            "mousemove",
            event => {

                mouseX = event.clientX;
                mouseY = event.clientY;

            }
        );


        const animateCursor = () => {

            currentX +=
                (mouseX - currentX) * 0.08;

            currentY +=
                (mouseY - currentY) * 0.08;


            cursorGlow.style.left =
                `${currentX}px`;

            cursorGlow.style.top =
                `${currentY}px`;


            requestAnimationFrame(
                animateCursor
            );

        };


        animateCursor();

    }


    /* =====================================================
       AI SUGGESTIONS
    ====================================================== */

    const aiSuggestions =
        document.querySelectorAll(
            ".ai-suggestions button"
        );

    const aiInput =
        document.querySelector(
            ".ai-input span"
        );


    aiSuggestions.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                if (aiInput) {

                    aiInput.textContent =
                        button.textContent;

                }

            }
        );

    });


    /* =====================================================
       FLOATING AI BUTTON
    ====================================================== */

    const floatingAI =
        document.getElementById(
            "floatingAI"
        );


    if (floatingAI) {

        floatingAI.addEventListener(
            "click",
            () => {

                const aiSection =
                    document.getElementById(
                        "rozwiazania"
                    );


                if (aiSection) {

                    aiSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    /* =====================================================
       SMOOTH ANCHOR SCROLL
    ====================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;


                    const targetPosition =
                        target.getBoundingClientRect().top
                        +
                        window.scrollY
                        -
                        headerHeight;


                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });

                }
            );

        });


    /* =====================================================
       BUTTON HOVER MAGNETIC EFFECT
    ====================================================== */

    const magneticButtons =
        document.querySelectorAll(
            ".button-primary"
        );


    magneticButtons.forEach(button => {

        if (
            !window.matchMedia(
                "(pointer: fine)"
            ).matches
        ) {
            return;
        }


        button.addEventListener(
            "mousemove",
            event => {

                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                const moveX =
                    (x - rect.width / 2) * 0.08;

                const moveY =
                    (y - rect.height / 2) * 0.08;


                button.style.transform =
                    `
                    translate(
                        ${moveX}px,
                        ${moveY}px
                    )
                    `;

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "";

            }
        );

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ====================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".main-nav a"
        );


    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const id =
                        entry.target.id;


                    navLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );


                        if (
                            link.getAttribute(
                                "href"
                            ) === `#${id}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                });

            },
            {
                rootMargin:
                    "-30% 0px -60% 0px"
            }
        );


    sections.forEach(section => {

        sectionObserver.observe(
            section
        );

    });

});

document.addEventListener("DOMContentLoaded", () => {

    /*
    =========================================================
    ELEMENTS
    =========================================================
    */

    const chat = document.getElementById("ai-chat");
    const openButton = document.getElementById("ai-chat-open");
    const closeButton = document.getElementById("ai-chat-close");

    const messagesContainer =
        document.getElementById("ai-chat-messages");

    const welcomeMessage =
        document.getElementById("ai-chat-welcome");

    const input =
        document.getElementById("ai-chat-input");

    const sendButton =
        document.getElementById("ai-chat-send");


    /*
    =========================================================
    STATE
    =========================================================
    */

    let messages = [];

    let loading = false;


    /*
    =========================================================
    OPEN / CLOSE
    =========================================================
    */

    function openChat() {

        if (!chat) {
            return;
        }

        chat.classList.add("open");

        setTimeout(() => {

            if (input) {
                input.focus();
            }

        }, 200);
    }


    function closeChat() {

        if (!chat) {
            return;
        }

        chat.classList.remove("open");
    }


    if (openButton) {

        openButton.addEventListener("click", () => {
            openChat();
        });

    }


    if (closeButton) {

        closeButton.addEventListener("click", () => {
            closeChat();
        });

    }


    /*
    =========================================================
    SCROLL
    =========================================================
    */

    function scrollToBottom() {

        if (!messagesContainer) {
            return;
        }

        messagesContainer.scrollTop =
            messagesContainer.scrollHeight;
    }


    /*
    =========================================================
    ADD MESSAGE
    =========================================================
    */

    function addMessage(role, content = "") {

        messages.push({
            role: role,
            content: content,
            suggestions: []
        });

        return messages.length - 1;
    }


    /*
    =========================================================
    UPDATE MESSAGE
    =========================================================
    */

    function updateMessage(index, content) {

        if (!messages[index]) {
            return;
        }

        messages[index].content = content;

        renderMessages();
    }


    /*
    =========================================================
    RENDER
    =========================================================
    */

    function renderMessages() {

        if (!messagesContainer) {
            return;
        }

        messagesContainer.innerHTML = "";


        /*
        WELCOME
        */

        if (messages.length === 0) {

            const welcome =
                document.createElement("div");

            welcome.className =
                "ai-chat__welcome";

            welcome.textContent =
                "Witaj! W czym mogę Ci pomóc?";

            messagesContainer.appendChild(welcome);

            return;
        }


        /*
        MESSAGES
        */

        messages.forEach((msg, messageIndex) => {

            const row =
                document.createElement("div");

            row.className =
                "ai-chat__message-row " +
                (
                    msg.role === "user"
                        ? "ai-chat__message-row--user"
                        : "ai-chat__message-row--assistant"
                );


            const wrapper =
                document.createElement("div");

            wrapper.className =
                "ai-chat__message-wrapper";


            /*
            MESSAGE
            */

            const message =
                document.createElement("div");

            message.className =
                "ai-chat__message " +
                (
                    msg.role === "user"
                        ? "ai-chat__message--user"
                        : "ai-chat__message--assistant"
                );

            message.textContent =
                msg.content;


            wrapper.appendChild(message);


            /*
            SUGGESTIONS
            */

            if (
                msg.role === "assistant" &&
                msg.suggestions &&
                msg.suggestions.length > 0
            ) {

                const suggestionsContainer =
                    document.createElement("div");

                suggestionsContainer.className =
                    "ai-chat__suggestions";


                msg.suggestions.forEach((question) => {

                    const button =
                        document.createElement("button");

                    button.type = "button";

                    button.className =
                        "ai-chat__suggestion";

                    button.textContent =
                        question;

                    button.disabled =
                        loading;

                    button.addEventListener(
                        "click",
                        () => {
                            sendMessage(question);
                        }
                    );

                    suggestionsContainer.appendChild(
                        button
                    );

                });


                wrapper.appendChild(
                    suggestionsContainer
                );
            }


            row.appendChild(wrapper);

            messagesContainer.appendChild(row);

        });


        /*
        LOADING
        */

        if (loading) {

            const loadingElement =
                document.createElement("div");

            loadingElement.className =
                "ai-chat__loading";


            for (let i = 0; i < 3; i++) {

                const dot =
                    document.createElement("span");

                dot.className =
                    "ai-chat__loading-dot";

                loadingElement.appendChild(dot);
            }


            messagesContainer.appendChild(
                loadingElement
            );
        }


        scrollToBottom();
    }


    /*
    =========================================================
    SUGGESTED QUESTIONS
    =========================================================
    */

    async function getSuggestedQuestions(
        answer,
        context
    ) {

        try {

            const response = await fetch(
                "http://10.0.51.174:8000/question",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        question: answer,
                        context: context
                    })
                }
            );


            if (!response.ok) {

                throw new Error(
                    `HTTP ${response.status}`
                );
            }


            const data =
                await response.json();


            return data.questions ?? [];

        } catch (error) {

            console.error(
                "Błąd generowania pytań:",
                error
            );

            return [];
        }
    }


    /*
    =========================================================
    SEND MESSAGE
    =========================================================
    */

    async function sendMessage(question = null) {

        const text =
            (
                question !== null
                    ? question
                    : input.value
            ).trim();


        if (!text || loading) {
            return;
        }


        /*
        CLEAR INPUT
        */

        input.value = "";


        /*
        USER MESSAGE
        */

        addMessage(
            "user",
            text
        );


        /*
        EMPTY AI MESSAGE
        */

        const assistantIndex =
            addMessage(
                "assistant",
                ""
            );


        loading = true;

        renderMessages();


        try {

            /*
            =================================================
            CHAT API
            =================================================
            */

            const response =
                await fetch(
                    "http://10.0.51.174:8000/chat_zapr",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json",

                            "Accept":
                                "text/event-stream"
                        },

                        body: JSON.stringify({
                            message: text,
                            baza: "zapr"
                        })
                    }
                );


            if (!response.ok) {

                throw new Error(
                    `HTTP ${response.status}`
                );
            }


            if (!response.body) {

                throw new Error(
                    "API nie zwróciło streamu"
                );
            }


            /*
            =================================================
            STREAM
            =================================================
            */

            const reader =
                response.body.getReader();

            const decoder =
                new TextDecoder("utf-8");


            let buffer = "";

            let assistantMessage = "";

            let ragContext = "";


            /*
            =================================================
            READ SSE
            =================================================
            */

            while (true) {

                const {
                    value,
                    done
                } = await reader.read();


                if (done) {
                    break;
                }


                buffer += decoder.decode(
                    value,
                    {
                        stream: true
                    }
                );


                const events =
                    buffer.split("\n\n");


                /*
                Ostatni event może być
                niekompletny.
                */

                buffer =
                    events.pop() ?? "";


                /*
                =================================================
                EVENTS
                =================================================
                */

                for (const event of events) {

                    const lines =
                        event.split("\n");


                    let eventType = "";

                    let data = "";


                    for (const line of lines) {

                        if (
                            line.startsWith(
                                "event:"
                            )
                        ) {

                            eventType =
                                line
                                    .slice(6)
                                    .trim();

                        } else if (
                            line.startsWith(
                                "data:"
                            )
                        ) {

                            data +=
                                line
                                    .slice(5)
                                    .trim();
                        }
                    }


                    if (!data) {
                        continue;
                    }


                    /*
                    =================================================
                    TOKEN
                    =================================================
                    */

                    if (
                        eventType === "token"
                    ) {

                        try {

                            const token =
                                JSON.parse(data);


                            assistantMessage +=
                                token;


                            updateMessage(
                                assistantIndex,
                                assistantMessage
                            );


                        } catch (error) {

                            console.error(
                                "Błąd tokenu:",
                                data,
                                error
                            );
                        }
                    }


                    /*
                    =================================================
                    CONTEXT
                    =================================================
                    */

                    else if (
                        eventType === "context"
                    ) {

                        try {

                            const context =
                                JSON.parse(data);


                            console.log(
                                "Kontekst RAG:",
                                context
                            );


                            if (
                                Array.isArray(
                                    context
                                )
                            ) {

                                ragContext =
                                    context
                                        .map(
                                            (doc) =>
                                                doc.content
                                        )
                                        .join(
                                            "\n\n"
                                        );
                            }


                        } catch (error) {

                            console.error(
                                "Błąd kontekstu:",
                                data,
                                error
                            );
                        }
                    }

                }

            }


            /*
            =================================================
            SUGGESTIONS
            =================================================
            */

            const suggestions =
                await getSuggestedQuestions(
                    assistantMessage,
                    ragContext
                );


            messages[
                assistantIndex
            ].suggestions =
                suggestions;


            loading = false;

            renderMessages();


        } catch (error) {

            console.error(
                "Błąd komunikacji z API:",
                error
            );


            messages[
                assistantIndex
            ] = {
                role: "assistant",

                content:
                    "Nie udało się połączyć z API.",

                suggestions: []
            };


            loading = false;

            renderMessages();

        }

    }


    /*
    =========================================================
    SEND BUTTON
    =========================================================
    */

    if (sendButton) {

        sendButton.addEventListener(
            "click",
            () => {
                sendMessage();
            }
        );

    }


    /*
    =========================================================
    ENTER
    =========================================================
    */

    if (input) {

        input.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter" &&
                    !event.shiftKey
                ) {

                    event.preventDefault();

                    sendMessage();
                }

            }
        );

    }


    /*
    =========================================================
    INITIAL RENDER
    =========================================================
    */

    renderMessages();

});
