const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("fileInput");
const previewImage = document.getElementById("previewImage");
const placeholderText = document.getElementById("placeholderText");
const nextBtn = document.getElementById("nextBtn");
const fileNameDisplay = document.getElementById("fileName");

dropzone.addEventListener("click", () => fileInput.click());
dropzone.addEventListener("keypress", (e) => {
  if (e.key === "Enter") fileInput.click();
});

dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropzone.classList.add("border-blue-500", "bg-blue-50");
});

dropzone.addEventListener("dragleave", () => {
  dropzone.classList.remove("border-blue-500", "bg-blue-50");
});

dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropzone.classList.remove("border-blue-500", "bg-blue-50");
  const file = e.dataTransfer.files[0];
  handleFile(file);
});

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  handleFile(file);
});

nextBtn.addEventListener("click", () => {
  alert("✅ Next step would go here!");
});

function handleFile(file) {
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = () => {
      previewImage.src = reader.result;
      previewImage.classList.remove("hidden");
      placeholderText.classList.add("hidden");
      fileNameDisplay.textContent = file.name;
      fileNameDisplay.classList.remove("hidden");
      nextBtn.disabled = false;
    };
    reader.readAsDataURL(file);
  }
}
