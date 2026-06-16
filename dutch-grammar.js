// قواعد اللغة الهولندية الكاملة
const dutchGrammarRules = [
    // 1. أنواع الأسماء والتصريف
    {
        id: 1,
        category: 'الأسماء',
        title: 'الأسماء والأداة المحددة (De/Het)',
        description: 'في اللغة الهولندية، كل اسم له أداة محددة إما "de" أو "het"',
        examples: [
            { dutch: 'de kat', arabic: 'القطة', note: '(أنثى)' },
            { dutch: 'het huis', arabic: 'المنزل', note: '(محايد)' },
            { dutch: 'de tafel', arabic: 'الطاولة', note: '(أنثى)' },
            { dutch: 'het boek', arabic: 'الكتاب', note: '(محايد)' }
        ]
    },

    // 2. جمع الأسماء
    {
        id: 2,
        category: 'الأسماء',
        title: 'صيغة الجمع',
        description: 'يتم تكوين الجمع بإضافة -en أو -s في الغالب',
        rules: [
            'إضافة -en: kat → katten (قطط)',
            'إضافة -s: huis → huizen (منازل)',
            'إضافة -es: neus → neuzen (أنوف)',
            'الكلمات المنتهية بـ -e: حذف -e وإضافة -en (tabel → tafels)'
        ],
        examples: [
            { dutch: 'katten', arabic: 'قطط' },
            { dutch: 'honden', arabic: 'كلاب' },
            { dutch: 'boeken', arabic: 'كتب' },
            { dutch: 'tafels', arabic: 'طاولات' }
        ]
    },

    // 3. الأفعال - المضارع البسيط
    {
        id: 3,
        category: 'الأفعال',
        title: 'الفعل في المضارع البسيط',
        description: 'تصريف الفعل في الزمن الحاضر',
        rules: [
            'I/je/we/jullie/zij/u: (ik hou van, je houdt van, we houden van)',
            'hij/zij/het: إضافة -t (hij houdt van)',
            'infinitief: houden (أساس الفعل)'
        ],
        examples: [
            { dutch: 'ik ben', arabic: 'أنا أكون' },
            { dutch: 'jij bent', arabic: 'أنت تكون' },
            { dutch: 'hij is', arabic: 'هو يكون' },
            { dutch: 'we zijn', arabic: 'نحن نكون' },
            { dutch: 'jullie zijn', arabic: 'أنتم تكونون' },
            { dutch: 'zij zijn', arabic: 'هم يكونون' }
        ]
    },

    // 4. الفعل "hebben" (يملك)
    {
        id: 4,
        category: 'الأفعال',
        title: 'الفعل hebben (يملك)',
        description: 'تصريف فعل "hebben" الشهير',
        examples: [
            { dutch: 'ik heb', arabic: 'أنا أملك' },
            { dutch: 'jij hebt', arabic: 'أنت تملك' },
            { dutch: 'hij heeft', arabic: 'هو يملك' },
            { dutch: 'we hebben', arabic: 'نحن نملك' },
            { dutch: 'jullie hebben', arabic: 'أنتم تملكون' },
            { dutch: 'zij hebben', arabic: 'هم يملكون' }
        ]
    },

    // 5. الفعل "zijn" (يكون)
    {
        id: 5,
        category: 'الأفعال',
        title: 'الفعل zijn (يكون)',
        description: 'تصريف فعل "zijn" الأساسي',
        examples: [
            { dutch: 'ik ben', arabic: 'أنا أكون' },
            { dutch: 'jij bent', arabic: 'أنت تكون' },
            { dutch: 'hij is', arabic: 'هو يكون' },
            { dutch: 'we zijn', arabic: 'نحن نكون' },
            { dutch: 'jullie zijn', arabic: 'أنتم تكونون' },
            { dutch: 'zij zijn', arabic: 'هم يكونون' }
        ]
    },

    // 6. الماضي البسيط
    {
        id: 6,
        category: 'الأفعال',
        title: 'الماضي البسيط',
        description: 'الزمن الماضي البسيط للأفعال',
        rules: [
            'الأفعال القوية: تتغير (ik zag - رأيت)',
            'الأفعال الضعيفة: إضافة -de أو -te (ik kookte - طبخت)',
            'بعد ال-t: إضافة -te (ik wachtte - انتظرت)',
            'الأفعال المنتهية بـ -f أو -s: تتحول إلى -v أو -z (ik leefde - عشت)'
        ],
        examples: [
            { dutch: 'ik was', arabic: 'كنت (من zijn)' },
            { dutch: 'ik had', arabic: 'كان لدي (من hebben)' },
            { dutch: 'ik zag', arabic: 'رأيت (من zien)' },
            { dutch: 'ik kookte', arabic: 'طبخت (من koken)' }
        ]
    },

    // 7. الحاضر التام
    {
        id: 7,
        category: 'الأفعال',
        title: 'الحاضر التام',
        description: 'صيغة الحاضر التام: hebben/zijn + participe',
        rules: [
            'ik heb gekookt (لقد طبخت)',
            'ik ben gegaan (لقد ذهبت)',
            'السلبي: hebben + participe منتهي في -d'
        ],
        examples: [
            { dutch: 'ik heb gegeten', arabic: 'لقد أكلت' },
            { dutch: 'jij bent gegaan', arabic: 'لقد ذهبت' },
            { dutch: 'hij heeft gewerkt', arabic: 'لقد عمل' },
            { dutch: 'we zijn gekomen', arabic: 'لقد جئنا' }
        ]
    },

    // 8. الصفات والتصريف
    {
        id: 8,
        category: 'الصفات',
        title: 'الصفات والتصريف',
        description: 'تصريف الصفات حسب الجنس والعدد',
        rules: [
            'مع het: بدون نهاية (het groot huis)',
            'مع de: إضافة -e (de grote huis)',
            'قبل الاسم: يضاف -e في الغالب',
            'بعد الاسم: بدون -e (het huis is groot)'
        ],
        examples: [
            { dutch: 'het grote huis', arabic: 'المنزل ال��بير' },
            { dutch: 'de rode roos', arabic: 'الوردة الحمراء' },
            { dutch: 'het huis is groot', arabic: 'المنزل كبير' },
            { dutch: 'de katten zijn zwart', arabic: 'القطط سوداء' }
        ]
    },

    // 9. الضمائر الشخصية
    {
        id: 9,
        category: 'الضمائر',
        title: 'الضمائر الشخصية',
        description: 'الضمائر الشخصية في اللغة الهولندية',
        examples: [
            { dutch: 'ik', arabic: 'أنا' },
            { dutch: 'jij / je', arabic: 'أنت' },
            { dutch: 'hij', arabic: 'هو' },
            { dutch: 'zij / ze', arabic: 'هي' },
            { dutch: 'het / \'t', arabic: 'هو/هي (محايد)' },
            { dutch: 'we / wij', arabic: 'نحن' },
            { dutch: 'jullie', arabic: 'أنتم' },
            { dutch: 'zij / ze', arabic: 'هم / هن' },
            { dutch: 'u', arabic: 'أنت (رسمي)' }
        ]
    },

    // 10. الضمائر الملكية
    {
        id: 10,
        category: 'الضمائر',
        title: 'الضمائر الملكية',
        description: 'الضمائر التي تدل على الملكية',
        examples: [
            { dutch: 'mijn', arabic: 'ملكي' },
            { dutch: 'jouw / je', arabic: 'ملكك' },
            { dutch: 'zijn', arabic: 'ملكه' },
            { dutch: 'haar', arabic: 'ملكها' },
            { dutch: 'ons / onze', arabic: 'ملكنا' },
            { dutch: 'jullie', arabic: 'ملكتكم' },
            { dutch: 'hun / hun', arabic: 'ملكهم / ملكهن' }
        ]
    },

    // 11. حروف الجر
    {
        id: 11,
        category: 'حروف الجر',
        title: 'حروف الجر الشائعة',
        description: 'حروف الجر المستخدمة بكثرة',
        examples: [
            { dutch: 'in', arabic: 'في' },
            { dutch: 'op', arabic: 'على' },
            { dutch: 'onder', arabic: 'تحت' },
            { dutch: 'boven', arabic: 'فوق' },
            { dutch: 'aan', arabic: 'إلى / في' },
            { dutch: 'van', arabic: 'من' },
            { dutch: 'naar', arabic: 'إلى / نحو' },
            { dutch: 'door', arabic: 'بواسطة / من خلال' },
            { dutch: 'voor', arabic: 'أمام / قبل' },
            { dutch: 'achter', arabic: 'خلف' },
            { dutch: 'naast', arabic: 'بجانب' },
            { dutch: 'tussen', arabic: 'بين' }
        ]
    },

    // 12. الأرقام الترت��بية
    {
        id: 12,
        category: 'الأرقام',
        title: 'الأرقام الترتيبية',
        description: 'الأرقام الترتيبية (الأول، الثاني، إلخ)',
        examples: [
            { dutch: 'eerste', arabic: 'الأول' },
            { dutch: 'tweede', arabic: 'الثاني' },
            { dutch: 'derde', arabic: 'الثالث' },
            { dutch: 'vierde', arabic: 'الرابع' },
            { dutch: 'vijfde', arabic: 'الخامس' },
            { dutch: 'zesde', arabic: 'السادس' },
            { dutch: 'zevende', arabic: 'السابع' },
            { dutch: 'achtste', arabic: 'الثامن' },
            { dutch: 'negende', arabic: 'التاسع' },
            { dutch: 'tiende', arabic: 'العاشر' }
        ]
    },

    // 13. الأسئلة
    {
        id: 13,
        category: 'التراكيب',
        title: 'كلمات الأسئلة',
        description: 'كلمات الاستفهام الأساسية',
        examples: [
            { dutch: 'Wie?', arabic: 'من؟' },
            { dutch: 'Wat?', arabic: 'ماذا؟' },
            { dutch: 'Waar?', arabic: 'أين؟' },
            { dutch: 'Wanneer?', arabic: 'متى؟' },
            { dutch: 'Waarom?', arabic: 'لماذا؟' },
            { dutch: 'Hoe?', arabic: 'كيف؟' },
            { dutch: 'Hoeveel?', arabic: 'كم؟' },
            { dutch: 'Welke?', arabic: 'أي؟' }
        ]
    },

    // 14. الجملة الإيجابية والسلبية
    {
        id: 14,
        category: 'التراكيب',
        title: 'الجملة الإيجابية والسلبية',
        description: 'تكوين الجمل الإيجابية والسلبية',
        rules: [
            'النفي: niet أو geen',
            'niet: للأفعال (Ik hou niet van)',
            'geen: للأسماء (Ik heb geen katten)'
        ],
        examples: [
            { dutch: 'Ik hou van katten', arabic: 'أنا أحب القطط' },
            { dutch: 'Ik hou niet van katten', arabic: 'أنا لا أحب القطط' },
            { dutch: 'Ik heb katten', arabic: 'عندي قطط' },
            { dutch: 'Ik heb geen katten', arabic: 'ليس عندي قطط' }
        ]
    },

    // 15. الماضي البسيط والحاضر التام
    {
        id: 15,
        category: 'الأفعال',
        title: 'الفرق بين الماضي البسيط والحاضر التام',
        description: 'متى نستخدم كل منهما',
        rules: [
            'الماضي البسيط: أح��اث مكتملة في الماضي البعيد',
            'الحاضر التام: أحداث قريبة أو لها تأثير على الحاضر',
            'الحاضر التام أكثر شيوعاً في اللغة المكتوبة'
        ],
        examples: [
            { dutch: 'Ik zag een film', arabic: 'رأيت فيلماً' },
            { dutch: 'Ik heb een film gezien', arabic: 'لقد شاهدت فيلماً' },
            { dutch: 'Gisteren ging ik naar school', arabic: 'ذهبت إلى المدرسة أمس' },
            { dutch: 'Ik ben naar school gegaan', arabic: 'لقد ذهبت إلى المدرسة' }
        ]
    },

    // 16. الفعل الضعيف والقوي
    {
        id: 16,
        category: 'الأفعال',
        title: 'الأفعال الضعيفة والقوية',
        description: 'الفرق بين الأفعال الضعيفة والقوية',
        rules: [
            'الأفعال الضعيفة: تتبع قاعدة منتظمة (-de/-te)',
            'الأفعال القوية: تتغير في الجذر (zien → zag → gezien)',
            'الأفعال غير المنتظمة: لا تتبع قاعدة'
        ],
        examples: [
            { dutch: 'koken (طبخ) → kookte → gekookt', arabic: 'فعل ضعيف' },
            { dutch: 'gaan (ذهب) → ging → gegaan', arabic: 'فعل قوي' },
            { dutch: 'zien (رأى) → zag → gezien', arabic: 'فعل قوي' }
        ]
    },

    // 17. الأفعال المركبة (Separable Verbs)
    {
        id: 17,
        category: 'الأفعال',
        title: 'الأفعال المركبة',
        description: 'أفعال يمكن فصل جزء منها عن الفعل',
        rules: [
            'meenemen (يأخذ معه): Ik neem een boek mee',
            'opbellen (يتصل): Ik bel je op',
            'اللاحقة تذهب إلى نهاية الجملة في المضارع'
        ],
        examples: [
            { dutch: 'Ik neem een boek mee', arabic: 'أنا أأخذ كتاباً معي' },
            { dutch: 'Jij belt me op', arabic: 'أنت تتصل بي' },
            { dutch: 'We gaan uit', arabic: 'نحن نخرج' }
        ]
    },

    // 18. الكلمات المركبة
    {
        id: 18,
        category: 'المفردات',
        title: 'الكلمات المركبة',
        description: 'كلمات مركبة من كلمتين أو أكثر',
        examples: [
            { dutch: 'appelboom', arabic: 'شجرة تفاح (apple + boom)' },
            { dutch: 'tandenborstel', arabic: 'فرشاة أسنان (tanden + borstel)' },
            { dutch: 'kaaswinkel', arabic: 'متجر الجبن (kaas + winkel)' },
            { dutch: 'koninkrijk', arabic: 'مملكة (koning + rijk)' }
        ]
    },

    // 19. الترتيب الكلاسيكي للجملة
    {
        id: 19,
        category: 'التراكيب',
        title: 'ترتيب الكلمات في الجملة',
        description: 'ترتيب الكلمات الأساسي في الجملة الهولندية',
        rules: [
            'الجملة البسيطة: الفاعل + الفعل + المفعول',
            'الجملة السلبية: الفاعل + الفعل المساعد + المفعول + الفعل الرئيسي',
            'الأسئلة: الفعل + الفاعل + ...'
        ],
        examples: [
            { dutch: 'Ik hou van katten', arabic: 'أنا (الفاعل) أحب (الفعل) القطط (المفعول)' },
            { dutch: 'Ik heb een boek gelezen', arabic: 'أنا لقد قرأت كتاباً' },
            { dutch: 'Hou jij van katten?', arabic: 'هل تحب القطط؟' }
        ]
    },

    // 20. الظروف والتعابير الشائعة
    {
        id: 20,
        category: 'التعابير',
        title: 'الظروف والتعابير الشائعة',
        description: 'ظروف وتعابير مفيدة في الحياة اليومية',
        examples: [
            { dutch: 'Goedemorgen', arabic: 'صباح الخير' },
            { dutch: 'Goedemiddag', arabic: 'مساء الخير' },
            { dutch: 'Goedenavond', arabic: 'مساء الخير' },
            { dutch: 'Slaap lekker', arabic: 'نم بشكل جيد' },
            { dutch: 'Tot ziens', arabic: 'إلى اللقاء' },
            { dutch: 'Dank je wel', arabic: 'شكراً لك' },
            { dutch: 'Alstublieft', arabic: 'من فضلك' },
            { dutch: 'Excuses', arabic: 'اعتذر' },
            { dutch: 'Ja', arabic: 'نعم' },
            { dutch: 'Nee', arabic: 'لا' }
        ]
    }
];

// تصدير البيانات
if (typeof module !== 'undefined' && module.exports) {
    module.exports = dutchGrammarRules;
}
