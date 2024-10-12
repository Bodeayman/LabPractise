            let inputName = document.querySelector(".paragraph-form")
            let inputEmail = document.querySelector(".email-form")
            let inputFac = document.querySelector(".faculty-form")
            let inputUni = document.querySelector(".uni-form")
            document.forms[0].onsubmit = (e) => {
                if ((inputName.value.trim() === "") || (inputEmail.value.trim() === "")  || (inputFac.value.trim() === "")  || (inputUni.value.trim() === "")) {
                    e.preventDefault();
                    if (inputName.value.trim() === "") {
                        inputName.classList.add("invalid");
                        let para = document.createElement("p");
                        let validText = document.createTextNode("Invalid name")
                        para.classList.add("mx-4")
                        para.appendChild(validText)
                        inputName.after(para)
                        setTimeout(() => {
                            para.parentElement.removeChild(para)
                            inputName.classList.remove("invalid");

                        }, 1000)
                    }
                    if (inputEmail.value.trim() === "") {
                        inputEmail.classList.add("invalid");

                        let para = document.createElement("p");
                        let validText = document.createTextNode("Invalid Email")
                        para.classList.add("mx-4")

                        para.appendChild(validText)
                        inputEmail.after(para)
                        setTimeout(() => {
                            para.parentElement.removeChild(para)
                            inputEmail.classList.remove("invalid");

                        }, 1000)
                    }
                     if (inputFac.value.trim() === "") {
                        inputFac.classList.add("invalid");
                        let para = document.createElement("p");
                        let validText = document.createTextNode("Invalid Faculty name")
                        para.classList.add("mx-4")
                        para.appendChild(validText)
                        inputFac.after(para)
                        setTimeout(() => {
                            para.parentElement.removeChild(para)
                            inputFac.classList.remove("invalid");

                        }, 1000)
                    }
                      if (inputUni.value.trim() === "") {
                        inputUni.classList.add("invalid");
                        let para = document.createElement("p");
                        let validText = document.createTextNode("Invalid University name")
                        para.classList.add("mx-4")
                        para.appendChild(validText)
                        inputUni.after(para)
                        setTimeout(() => {
                            para.parentElement.removeChild(para)
                            inputUni.classList.remove("invalid");

                        }, 1000)
                    }
                }

            }