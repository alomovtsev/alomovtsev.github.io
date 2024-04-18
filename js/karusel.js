
const imagePaths = [
  "./images/dalle/flowers - _1edcec86-cfee-489f-822f-465530ee86e3.jpg",
  "./images/dalle/flowers - _20dbde62-181e-4c66-a116-f3d53b528d90.jpg",
  "./images/dalle/flowers - _25239c2d-a6df-48ff-aeb6-d1290a6bd2b0.jpg",
  "./images/dalle/flowers - _47fac3f8-ca24-45d3-a1dc-d113a226f60d.jpg",
  "./images/dalle/flowers - _480796df-452f-42ee-adc2-20c60c54eaaf.jpg",
  "./images/dalle/flowers - _6bfe4fcf-aa17-4c2d-946d-a57fcb47f8bd.jpg",
  "./images/dalle/flowers - _6d50a5f9-1343-466b-97ea-a05467d453d9.jpg",
  "./images/dalle/flowers - _76fb453b-4218-4ebf-b2f0-880d9dc8ff57.jpg",
  "./images/dalle/flowers - _80572e37-f97b-4f86-81b4-44d3552c83e8.jpg",
  "./images/dalle/flowers - _924c6e27-43bc-4d44-b5fc-5f308d815bdb.jpg",
  "./images/dalle/flowers - _9fa5f63e-8608-4f85-a1dd-f21ca3ba1d60.jpg",
  "./images/dalle/flowers - _afcfc36c-dd8a-421b-a72f-190a9f34af3e.jpg",
  "./images/dalle/flowers - _b8795f15-f502-4c09-a106-595ba01332f5.jpg",
  "./images/dalle/flowers - _bb597fad-fccd-4893-aa27-daa3f675c6b3.jpg",
  "./images/dalle/flowers - _be57b273-a6c9-43af-80eb-270f7648b2b6.jpg",
  "./images/dalle/flowers - _c53a7fd3-422f-405a-9563-be19011022c2.jpg",
  "./images/dalle/flowers - _c5e93836-b529-42ea-b100-0188bd07d63e.jpg",
  "./images/dalle/flowers - _d7bc2155-c9d9-4ca1-a47b-8e42dcd5dac7.jpg",
  "./images/dalle/flowers - _de513150-a39d-4135-b046-2b5e5ad07e43.jpg",
  "./images/dalle/flowers - _f0c6d4fd-fac0-4944-bc61-8bbdfd0143f7.jpg"
];

let currentImageIndex = 0;
const imageDisplay = document.getElementById('imageDisplay');
const btnFirst = document.getElementById('btnFirst');
const btnPrevious = document.getElementById('btnPrevious');
const btnNext = document.getElementById('btnNext');
const btnLast = document.getElementById('btnLast');

// Функция для обновления отображаемого изображения
function updateImage() {
  imageDisplay.src = imagePaths[currentImageIndex];
}

// Обработчики событий для кнопок управления
btnFirst.addEventListener('click', function() {
  currentImageIndex = 0;
  updateImage();
});

btnPrevious.addEventListener('click', function() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    updateImage();
  }
});

btnNext.addEventListener('click', function() {
  if (currentImageIndex < imagePaths.length - 1) {
    currentImageIndex++;
    updateImage();
  }
});

btnLast.addEventListener('click', function() {
  currentImageIndex = imagePaths.length - 1;
  updateImage();
});

// Инициализация отображаемого изображения
updateImage();
