const LEVELS = [
    {
        // MENU
        map:
            'UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU\n' +
            'U                                     U\n' +
            'U                                     U\n' +
            'U                                     U\n' +
            'U                                     U\n' +
            'U                                     U\n' +
            'U                                     U\n' +
            'UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU\n',


        texts: [
            {
                'x': 0.56,
                'y': 0.2,
                'width': 50,
                'height': 0.08,
                'font': 'VT323',
                'value': "CAMPAIGN"
            },
            {
                'x': 0.58,
                'y': 0.3,
                'width': 50,
                'height': 0.08,
                'font': 'VT323',
                'value': "LEVELS"
            },
            {
                'x': 0.535,
                'y': 0.4,
                'width': 50,
                'height': 0.08,
                'font': 'VT323',
                'value': "HIGH SCORES"
            },
            {
                'x': 0.53,
                'y': 0.5,
                'width': 50,
                'height': 0.08,
                'font': 'VT323',
                'value': "CREATE LEVEL"
            },
        ],
        buttons: [
            {
                'x': 0.5,
                'y': 0.14,
                'width': 0.27,
                'height': 0.08,
            },
            {
                'x': 0.5,
                'y': 0.24,
                'width': 0.27,
                'height': 0.08,
            },
            {
                'x': 0.5,
                'y': 0.34,
                'width': 0.27,
                'height': 0.08,
            },
            {
                'x': 0.5,
                'y': 0.44,
                'width': 0.27,
                'height': 0.08,
            },
        ],
        borders: [
            {
                'x1': 0.5,
                'y1': 0.16,
                'x2': 0.5,
                'y2': 0.14,
                'x3': 0.512,
                'y3': 0.14
            },
            {
                'x1': 0.5,
                'y1': 0.202,
                'x2': 0.5,
                'y2': 0.222,
                'x3': 0.512,
                'y3': 0.222
            },
            {
                'x1': 0.77,
                'y1': 0.16,
                'x2': 0.77,
                'y2': 0.14,
                'x3': 0.758,
                'y3': 0.14
            },
            {
                'x1': 0.77,
                'y1': 0.202,
                'x2': 0.77,
                'y2': 0.222,
                'x3': 0.758,
                'y3': 0.222
            },

        ]
    },
    {   // LEVEL 1
        map:
            "UUUUUUU                           UUUUUU\n" +   // 0
            "UUU                                  UUU\n" +   // 0
            "U#      #_____________#               #U\n" +   // 1
            "U#M $   #             #               #U\n" +   // 2
            "U#BBBBBB#      $      #_______#       #U\n" +   // 3
            "U#      #UUUUUUUUU    #       #   $   #U\n" +   // 4
            "U#      #            BBB#     #BBBBBBB#U\n" +   // 5
            "U#BBBB  #   BBBBBBBB    BBBBBB#       #U\n" +   // 6
            "U#    #B#_____________________#       #U\n" +   // 7
            "U#    #B#         #UU#$#UU#   #       #U\n" +   // 8
            "U# UUUUUU     H   #UBBBBBU#   #   $   #U\n" +   // 9
            "U#      # $       #UBBBBBU#$  # #BBB# #U\n" +   // 10
            "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU",      // 29
    },
    {   // LEVEL 2
        map:
            "UUUUUUU                           UUUUUU\n" +   // 0
            "UUU                                  UUU\n" +   // 0
            "U#      #_____________#               #U\n" +   // 1
            "U#M $   #             #               #U\n" +   // 2
            "U#BBBBBB#             #_______#       #U\n" +   // 3
            "U#      #UUUUUUUUU    #       # M $   #U\n" +   // 4
            "U#      #            BBB#     #BBBBBBB#U\n" +   // 5
            "U#BBBB  #   BBBBBBBB    BBBBBB#       #U\n" +   // 6
            "U#    #B#_____________________#       #U\n" +   // 7
            "U#    #B#         #UU#$#UU#   #       #U\n" +   // 8
            "U# UUUUUU     H   #UBBBBBU#   #   $   #U\n" +   // 9
            "U#      # $       #UBBBBBU#   # #BBB# #U\n" +   // 10
            "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU",      // 29
    },
    {   // LEVEL 3
        map:
            "UUUUUUU                           UUUUUUUUUUUU                            UUUUUUUUUUUU                           UUUUUUU\n" +   // 0
            "UUUU                                UUUUUUUU                                UUUUUUUU                               UUUUU\n" +   // 0
            "UUU     #_____________#              UUUUUU     #_____________#              UUUUUU     #_____________#              UUU\n" +   // 1
            "U#  $   #             #               #  #      #             #               #$ #      #             #               #U\n" +   // 2
            "U#BBBBBB#             #_______#       #UU#BBBBBB#   BBBBBB    #_______#BBBBBB #UU#      #             #_______#       #U\n" +   // 3
            "U#      #UUUUUUUUU    #       #   $ M #UU#      #   BBBBBB    #       #   $   #UU#      #BBBBBBBBBB   #       #   $   #U\n" +   // 4
            "U#      #            BBB      #BBBBBBB#UU#      #   BB  BB   BBB      #       #UU#BBBBBB#            BBB      #BBBBBBB#U\n" +   // 5
            "U#BBBB  #   BBBBBBBB    BBBBBB#       #UU#      #   B    B            #       #UU#      #         M           #       #U\n" +   // 6
            "U#    #B#_____________________#       #UU#     B#_____________________#       #UU#     B#_____________________#  BBB  #U\n" +   // 7
            "U#    #B#         #UU# #UU#   #       #UU#     B#                     #       #UU#     B#                     #  BBB  #U\n" +   // 8
            "U# UUUUU#     H   #UBBBBBU#   #   $   #UU#     B#    #BBBBBB#    M    #   $   #UU#     B#                     #       #U\n" +   // 9
            "U#     B#         #UBBBBBU#   # #BBB# #UU#     B#  #B#  $BBB#         # #BBB# #UU#     B#BBBBBBBBBBBBBBBBBBBBB#  BBB  #U\n" +   // 10
            "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU",      // 29
    },
    {   // LEVEL 4
        map:
            "UUUUUUUUUUUU                 UUUUUUUUUUUUUUUUUUUUUU                  UUUUUUUUUUUUUUUUUUUUUU                UUUUUUUUUUUUU\n" +   // 0
            "UUUUUUU                           UUUUUUUUUUUU                            UUUUUUUUUUUU                           UUUUUUU\n" +   // 0
            "UUU     #_____________#              UUUUUU     #_____________#              UUUUUU     #_____________#              UUU\n" +   // 1
            "U#  $   #             #               #  #      #             #               #  #      #             #       $       #U\n" +   // 2
            "U#BBBBBB#             #_______#       #UU#BBBBBB#   BBBBBB    #_______#BBBBBB #UU#      #             #_______#       #U\n" +   // 3
            "U#      #UUUUUUUUU    #       # M    $#UU#      #   BBBBBB    #       #       #UU#      #BBBBBBBBBB   #       #      $#U\n" +   // 4
            "U#      #            BBB      #BBBBBBB#UU#      #   BB$$BB   BBB      #       #UU#BBBBBB#            BBB      #BBBBBBB#U\n" +   // 5
            "U#BBBB  #   BBBBBBBB    BBBBBB#       #UU#      #   B    B            #       #UU#      #             M       #       #U\n" +   // 6
            "U#     B#_____________________#       #UU#     B#_____________________#       #UU#     B#_____________________#  BBB  #U\n" +   // 7
            "U#   $ B#     H    UU   UU    #       #UU#     B#                     #       #UU#     B#                     #  BBB  #U\n" +   // 8
            "U# UUUUU#          UBBBBBU    #       #UU#     B#      BBBBB          #   $   #UU#     B#                     #       #U\n" +   // 9
            "U#     B#          UBBBBBU    #  BBB  #UU#     B#      $ BBB          #  BBB  #UU#     B#BBBBBBBBBBBBBBBBBBBBB#  BBB  #U\n" +   // 10
            "U#______#          UUU$UUU    #       #UU#______#          B  BBBBBBB #       #UU#______#                     #       #U\n" +   // 11
            "U#      #                     #       #UU#      #     M               #       #UU#      #                     #       #U\n" +   // 12
            "U#     B#BBBBBBBBB    BBBBBBB #       #UU#     B#BBBBBBBB     BBBBBBB #       #UU#     B#BBBBBBBBB    BBBBBBB UUUUUU  #U\n" +   // 13
            "U#BBBB B#                     #       #UU#     B#                     #       #UU#     B#                     #       #U\n" +   // 14
            "U#     B#                     #       #UU#     B#                     #       #UU#     B#                     # BBBBBB#U\n" +   // 15 
            "U#      #UUUUUUUU  BBBBB      #_______#  #  $   #        BBBBB        #_______#  #  $   #BBBBBBBB  BBBBB      #_______#U\n" +   // 16
            "U#BBBBBB#                     #       #UU#BBBBBB#      M              #       #UU#BBBBBB#                   M #       #U\n" +   // 17
            "U#     B#    BBBBBBBBB#       #       #UU#     B#BBBBBBBBBBBBB#       #       #UU#     B#             #BBBBBB UUUUUUU #U\n" +   // 18
            "U#     B#             #       #       #UU#     B#             #       #       #UU#     B#             #       #       #U\n" +   // 19
            "U#     BBBBBBBBBBBB   #       #       #UU#     BBBBBBBBBBBB   #       #       #UU#     BBBBBBBBBBBB   #       # BBBBBB#U\n" +   // 20
            "U#      #             # B     #       #UU#  $   #             # B     #       #UU#  $   #             # B     #       #U\n" +   // 21
            "U#  BBBB#             # B     #       #UU#  BBBB#             # B     #       #UU#  BBBB#             # B     # UUUUU #U\n" +   // 22
            "U#     B#             # B     #       #UU#     B#             # B     #       #UU#     B#             # B     # UUUUU #U\n" +   // 23
            "U#BBBB B#_______#   BBBBBBBBB #       #UU#     B#_______#   BBBBBBBBB #       #UU#     B#_______#   BBBBBBBBB #       #U\n" +   // 24
            "U#     B#       #             #       #  #     B#       #             #       #  #     B#       #             BBBBBB  #U\n" +   // 25
            "U# UUUUB#       #             #       #UU#   M B#       #     BBB     #       #UU#     B#       #             #       #U\n" +   // 26
            "U#  #   #      B#    UUUUUU   #     # #UU# #    #      B#     BBB     #     # #UU# #    #      B#UUUUBBUUUUUU #  B  # #U\n" +   // 27
            "UBBB#   #      B#             #     #BBUUBB#    #      B#             #     #BBUUBB#    #      B#          M  #     #BBU\n" +   // 28
            "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU",      // 29
    },
    {   // LEVEL 5
        map:
            "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU                                                                                                              UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU\n" +
            "U       M        $B_____                         UU                                                                                                            UU                         _____B$        M       U\n" +
            "U#BBBBBBBBBBBBBBBBBB$   BBBBBBBBBBBBBBBBBBBBBBB#  UUU                                                                                                        UUU  #BBBBBBBBBBBBBBBBBBBBBBB   $BBBBBBBBBBBBBBBBBB#U\n" +
            "U#                      ____                   #    UUU                                                                                                    UUU    #                   ____                      #U\n" +
            "U#  #BBBBBBBBBBBBBBBBBBB$   BBBBBBBBBBBBBBBBBBBBBBB  BUUUU                                                                                              UUUUBBBBBBBBBBBBBBBBBBBBBBBBBB   $BBBBBBBBBBBBBBBBBBB#  #U\n" +
            "U#  #                    H  ____                         UUUUU                                                                                      UUUUU                         ____          M            #  #U\n" +
            "U#BBBBBBBBBBBBBBBBBBBBBBBBBB$   BBBBBBBBBBBBBBBBB#           UUUUUU                                                                            UUUUUU          #BBBBBBBBBBBBBBBBBB   $BBBBBBBBBBBBBBBBBBBBBBBBBB#U\n" +
            "U#                              ____             #           UUUUUUUUUUUU                                                                UUUUUUUUUUUU     M    #              ____        M                     #U\n" +
            "U#         #BBBBBBBBBBBBBBBBBBBB$   BBBBBBBBBBBBBBBBBBBBBBBB UUUUUUUUUUUUUUUUUUU                                                  UUUUUUUUUUUUUUUUUUUBBBBBBBBBBBBBBBBBBBBBBBBB   $BBBBBBBBBBBBBBBBBBBB#         #U\n" +
            "U#   _     #                        ____                     UUUUUUUUUUUUUUUUUUUUUUUUUUU                                  UUUUUUUUUUUUUUUUUUUUUUUUUUU                     ____      M                 #     _   #U\n" +
            "U#BBB BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB$   BBBBBBBBB#_______________________$UUUUUUUUUUUUUUUUUUUUUUU                UUUUUUUUUUUUUUUUUUUUUUU$______________________#BBBBBBBBBB   $BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB BBB#U\n" +
            "U#   $                                  _____    #           UUUUUUUU#  UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU  #UUUUUUUU#         #     _____                                  $   #U\n" +
            "U#   B     #BBBBBBBBBBBBBBBBBBBBBBBBBBBB$    BBBBBBBBBBBBBBBBUUUUUUUU# $UUUUUUUUUUUUU                 M:  :M                 UUUUUUUUUUUUU$ #UUUUUUUUBBBBBBBBBBBBBBBB    $BBBBBBBBBBBBBBBBBBBBBBBBBBBB#     B   #U\n" +
            "U#    $    #                          ___   _________        UUUUU  $##UUUUUUUU            $UUUUUUUUUUUU##UUUUUUUUUUUU$            UUUUUUUU##$  UUUUU        _________   ___                    M     #    $    #U\n" +
            "U#    B    #UUUUUUUUUUUUUUUUUUU    ____   M   B              UUU$$$#UUUUUUU                     UUUUUUUU##UUUUUUUU                     UUUUUUU#$$$UUU              B  M            UUUUUUUUUUUUUUUUUUU#    B    #U\n" +
            "U#   $     #                   _____  M  #BBBBB   U$U          $$#UUUUU___________________________UUU$  ##  $UUU___________________________UUUUU#$$          U$U   BBBBB#  M                          #     $   #U\n" +
            "U#   B     BBBBBBBB#                 #B# #B       U U        UUUUUU                                 UUUU##UUUU                                 UUUUUU        U U       B# #B#                 #BBBBBBBB     B   #U\n" +
            "U#    $    B      BBBBBBB#           #BBBBB       U$U        UUUU      B       M        B       $    UUU##UUU    $       B       M        B      UUUU        U$U       BBBBB#           #BBBBBBB      B    $    #U\n" +
            "U#    B    B$           BBBBB#    BM #B           U U        UUU       BBBBBBBBBBBBBBBBBB $     B     UU##UU     B     $ BBBBBBBBBBBBBBBBBB       UUU        U U           B# MB    #BBBBB           $B    B    #U\n" +
            "U#   $     BBBBBBBBBBB      BBBB# BBBBB           U$U        UU        B               $B        $     :##:     $        B$               B        UU        U$U           BBBBB #BBBB      BBBBBBBBBBB     $   #U\n" +
            "U#   B     B$                $BB#____________________________UU        B #BBBBBBBBBBBBBBB $      B     #UU#     B      $ BBBBBBBBBBBBBBB# BB       UU____________________________#BB$                $B     B   #U\n" +
            "U#    $    BBBBBBBBBBBBBBBBBBBBBB      B#                    UU        B #              B         $    #UU#    $         B              #          UU               M    #B      BBBBBBBBBBBBBBBBBBBBBB    $    #U\n" +
            "U#    B                                BBBBBBBBBBBBBB#     BBUU      # BBBBBBBBBBBBBBB# B $       B    #UU#    B       $ B #BBBBBBBBBBBBBBBB#      UUBB     #BBBBBBBBBBBBBB                                B    #U\n" +
            "U#M    _________________       $       BBBBBBBBBBBBBB#          $    # B$             # B          $   #UU#   $          B #             $B #    $          #BBBBBBBBBBBBBB     $   M   _________________      M#U\n" +
            "UUUUUUUU#              UUUUUUUUU       BBB    $ BBBBB#      BUUUU____# BBBBBBBBBBBBBBBBBB $        B   #UU#   B        $ BBBBBBBBBBBBBBBBBB #____UUUUB      #BBBBB $    BBB     UUUUUUUUU               #UUUUUUUUU\n" +
            "       UUUUUUUUUU#                     BB         BBB#       UU      #                            $    #UU#    $                            #      UU       #BBB         BB                    #UUUUUUUUUU        \n" +
            "                UUUUUUUUU#             B           BB#_______UU      U____________________U       B    #UU#    B       U____________________U      UU_______#BB           B            #UUUUUUUUU                 \n" +
            "                        UUUUUUUU#                   BB     B#UU                                  $     #UU#     $                                  UU#B     BB                  #UUUUUUUU                         \n" +
            "                               UUUUUUU#              B      #UU$                   $             B     #UU#     B             $                   $UU#      B             #UUUUUUU                                \n" +
            "                                     UUUUUU#         B      #UU$ __________________U__________________ #UU# __________________U__________________ $UU#      B         #UUUUU                                      \n" +
            "                                          UUUUU#     B      #UU$     U      M      U      M      U     #UU#     U      M      U      M      U     $UU#      B     #UUUUU                                          \n" +
            "                                              UUUU#         #UU      UBUBUBUBUBUBUBUBUBUBUBUBUBUBU     #UU#     UBUBUBUBUBUBUBUBUBUBUBUBUBUBU      UU#         #UUUU                                              \n" +
            "                                                 UUUU#      #UUU                                       #UU#                                       UUU#      #UUUU                                                 \n" +
            "                                                    UUUU#  #BUUUU         B   M   BBBBBB    B _____    #UU#    _____B    BBBBBB   M   B          UUUUB#  #UUUU                                                    \n" +
            "                                                       UUUU#              BBBBBBBBB$   BBBBBB B        #UU#       B BBBBBB   $BBBBBBBBB               #UUUU                                                       \n" +
            "                                                          UUUUU#                  B#          B        #UU#       B          #B              #UUUUUUUUUU                                                          \n" +
            "                                                              UUUUUU#             BBBBBBBBBBBBB       #UUUU#      BBBBBBBBBBBBB              #UUUUUU                                                              \n" +
            "                                                                   UUUUUUU#                          #UUUUUU#                      M   #UUUUUUU                                                                   \n" +
            "                                                                         UUUUUUUU#                  #U$    $U#                  #UUUUUUUU                                                                         \n" +
            "                                                                                UUUUUUUUU#        #UUUUU##UUUUU#        #UUUUUUUUU                                                                                \n" +
            "                                                                                        UUUUUUUUUU#:    ##    :#UUUUUUUUUU                                                                                        \n" +
            "                                                                                                 UUUUUUUUUUUUUUUU                                                                                                 \n",
    }

];