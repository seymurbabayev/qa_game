var q1 = prompt(`1. Letal sözü hansı varianta uyğun gəlir? 
                    A:  Bitki
                    B:  Mineral
                    C:  Ölümcül`)

// Condition 1
if(q1 == 'C') {
    var q2 = prompt(`2.	Bir cüt nərd zərini 5 dəfə ardıcıl atdıqda cəmdə ən azı və ən çoxu neçə xal yığılar?
                    A:  5 və 30
                    B:  10 və 60
                    C:  5 və 60`)
    // Condition 2
    if(q2 == 'B') {
        var q3 = prompt(`3.	Çəmənlikdə qoyunlarla toyuqların ayaqlarinin birgə sayı 160 dir. Qoyunlar toyuqlardan 10 baş artıqdır. Qoyunların və toyuqların sayını tapın.
                        A:  30,20
                        B:  40,40
                        C:  10,30`)
        // Condition 3
        if(q3 == 'A') {
            var q4 = prompt(`4. 400-ün 1/4-nün 1/2-nin 1/5-i neçədir?`)

            // Condition 4
            if(q4 == 10) {
                var q5 = prompt(`5. 226 - 4,8,8   |   513 -  6,8,4   |   ? - 2,2,2`)
                // Condition 5
                if(q5 == 111) {
                    var q6 = prompt(`6. 124-108, 325 - 310, 162-112, 421 - ?`)

                    // Condition 6
                    if(q6 == 402) {
                        alert('Bütün cavablar doğrudur! Xal: 60')
                    } else {alert('Səhv cavabdır! Xal: 50')}

                } else {alert('Səhv cavabdır! Xal: 40')}

            } else {alert('Səhv cavabdır! Xal: 30')}

        } else {alert('Səhv cavabdır! Xal: 20')}

    } else {alert('Səhv cavabdır! Xal: 10')}

} else {alert('Səhv cavabdır! Xal: 0')}