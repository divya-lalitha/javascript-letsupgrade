function genquote(){
  var ran=Math.floor(Math.random()*(quotes.length));
  document.getElementById('quote').innerHTML=quotes[ran];
}
var quotes=["\"The most beautiful thing you can wear is confidence.\" — Blake Lively<br>",
            "\"Not how long, but how well you have lived is the main thing.\" — Seneca<br>",
            "\"The whole secret of a successful life is to find out what is one’s destiny to do and then do it.\"– Henry Ford<br>",
            "\"Sing like no one's listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.\"<br>",
            "\"Turn your wounds into wisdom.\" — Oprah Winfrey<br>",
            "\"“Life is like riding a bicycle. To keep your balance, you must keep moving.\" — Albert Einstein<br>",
            "\"The most beautiful things in the world can't be seen or even touched.They must be felt with the heart.\" — Helen Keler<br>",
            "\"Love yourself first and everything else falls into line.\"— Lucille Ball<br>",
            "\"Lead from the heart not the head.\" — Princess Diana<br>",
            "\"What comes easy wont last long and what lasts long wont come easy.\"<br>",
            "\"Other things may change us, but we start and end with family.\"<br>",
            "\"Beauty is power;A smile is its sword.\" —John Ray<br>",
            "\"If you can't change your fate change your attitude.\"<br>",
            "\"Nothing will dim the sunshine that shines from inside.\"<br>",
            "\"Beauty attracts the eye but personality captures the heart.\"<br>",
            "\"Be strong because things will get better.It may be stormy now,but it never rains forever.\"<br>",
          ];