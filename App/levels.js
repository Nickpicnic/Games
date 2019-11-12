const LEVELS = [
    {
        map:
            "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU\n"+
            "UUUUU M   U  M  U  M  U  M  U   M UUUUU\n"+
            "UUMUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUMUU\n"+
            "UMU#_______________________________#UMU\n"+
            "UUU#                               #UUU\n"+
            "UMU#_____#_____##___###___####_____#UMU\n"+
            "UUU#     #    #  #  #  #  #        #UUU\n"+
            "UMU#     #    #  #  #   # ###      #UMU\n"+
            "UUU#     #    #  #  #   # #        #UUU\n"+
            "UMU#     #    #  #  #  #  #        #UMU\n"+
            "UUU#     ####  ##   ###   ####     #UUU\n"+
            "UMU#_____    __  ___   ___    _____#UMU\n"+
            "UUU#_###__#  #_#  #_#  #_####_###__#UUU\n"+
            "UMU# #H # #  # ## # ## # #    #  # #UMU\n"+
            "UUU# #  # #  # # ## # ## ###  #  # #UUU\n"+
            "UMU# #  # #  # #  # #  # #    #  # #UMU\n"+
            "UUU# ###  #  # #  # #  # #    ###  #UUU\n"+
            "UMU# #  #  ##  #  # #  # #### #  # #UMU\n"+
            "UUU#_______________________________#UUU\n"+
            "UMU#                               #UMU\n"+
            "UUU#_______________________________#UUU\n"+
            "UMU#_______#  # ### #   #__________#UMU\n"+
            "UUU#       ## # #   #   #          #UUU\n"+
            "UMU# #UUU# # ## ##  #   #    #UUU# #UMU\n"+
            "UUU# #UMU# #  # #   #   #    #UMU# #UUU\n"+
            "UMU# #UUU# #  # #   # # #    #UUU# #UMU\n"+
            "UUU# #UMU# #  # ###  # #     #UMU# #UUU\n"+
            "UMU# #UUU#                   #UUU# #UMU\n"+
            "UUU# #UMU# ##   #  #  # ###  #UMU# #UUU\n"+
            "UMU# #UUU# #   # # #### #    #UUU# #UMU\n"+
            "UUU# #     #   # # #  # ##  $    # #UUU\n"+
            "UMU#_#_____# # # # #  # #   #____#_#UMU\n"+
            "UUU# #     # # ### #  # #   #    # #UUU\n"+
            "UMU#_#_____### # # #  # ### #____#_#UMU\n"+
            "UUU# #                      #    # #UUU\n"+
            "UMUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUMU\n"+
            "UUUMU M   U  M  U  M  U  M  U   M UMUUU\n"+
            "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU\n",
    },
    {
        map: 
            "UUUUUUU                           UUUUUU\n"+   // 0
            "UUU                                  UUU\n"+   // 0
            "U#      #_____________#               #U\n"+   // 1
            "U#M $   #             #               #U\n"+   // 2
            "U#BBBBBB#             #_______#       #U\n"+   // 3
            "U#      #UUUUUUUUU    #       # M $   #U\n"+   // 4
            "U#      #            BBB#     #BBBBBBB#U\n"+   // 5
            "U#BBBB  #   BBBBBBBB    BBBBBB#       #U\n"+   // 6
            "U#    #B#_____________________#       #U\n"+   // 7
            "U#    #B#         #UU# #UU#   #       #U\n"+   // 8
            "U# UUUUUU     H   #UBBBBBU#   #   $   #U\n"+   // 9
            "U#      # $       #UBBBBBU#   # #BBB# #U\n"+   // 10
            "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU",      // 29
    },
    {
        map:
            "UUUUUUU                           UUUUUUUUUUUU                            UUUUUUUUUUUU                           UUUUUUU\n"+   // 0
            "UUU     #_____________#              UUUUUU     #_____________#              UUUUUU     #_____________#              UUU\n"+   // 1
            "U#  $   #             #               #  #      #             #               #  #      #             #               #U\n"+   // 2
            "U#BBBBBB#             #_______#       #UU#BBBBBB#   BBBBBB    #_______#BBBBBB #UU#      #             #_______#       #U\n"+   // 3
            "U#      #UUUUUUUUU    #       # M     #UU#      #   BBBBBB    #       #       #UU#      #BBBBBBBBBB   #       #       #U\n"+   // 4
            "U#      #            BBB      #BBBBBBB#UU#      #   BB  BB   BBB      #       #UU#BBBBBB#            BBB      #BBBBBBB#U\n"+   // 5
            "U#BBBB  #   BBBBBBBB    BBBBBB#       #UU#      #   B    B            #       #UU#      #             M       #       #U\n"+   // 6
            "U#     B#_____________________#       #UU#     B#_____________________#       #UU#     B#_____________________#  BBB  #U\n"+   // 7
            "U#   $ B#     H    UU   UU    #       #UU#     B#                     #       #UU#     B#                     #  BBB  #U\n"+   // 8
            "U# UUUUU#          UBBBBBU    #       #UU#     B#      BBBBB          #       #UU#     B#                     #       #U\n"+   // 9
            "U#     B#          UBBBBBU    #  BBB  #UU#     B#        BBB          #  BBB  #UU#     B#BBBBBBBBBBBBBBBBBBBBB#  BBB  #U\n"+   // 10
            "U#______#          UUU UUU    #       #UU#______#          B  BBBBBBB #       #UU#______#                     #       #U\n"+   // 11
            "U#      #                     #       #UU#      #                     #       #UU#      #                     #       #U\n"+   // 12
            "U#     B#BBBBBBBBB    BBBBBBB #       #UU#     B#BBBBBBBB     BBBBBBB #       #UU#     B#BBBBBBBBB    BBBBBBB UUUUUU  #U\n"+   // 13
            "U#BBBB B#                     #       #UU#     B#                     #       #UU#     B#                     #       #U\n"+   // 14
            "U#     B#                     #       #UU#     B#                     #       #UU#     B#                     # BBBBBB#U\n"+   // 15 
            "U#      #UUUUUUUU  BBBBB      #_______#  #      #        BBBBB        #_______#  #      #BBBBBBBB  BBBBB      #_______#U\n"+   // 16
            "U#BBBBBB#                     #       #UU#BBBBBB#      M              #       #UU#BBBBBB#                   M #       #U\n"+   // 17
            "U#     B#    BBBBBBBBB#       #       #UU#     B#BBBBBBBBBBBBB#       #       #UU#     B#             #BBBBBB UUUUUUU #U\n"+   // 18
            "U#     B#             #       #       #UU#     B#             #       #       #UU#     B#             #       #       #U\n"+   // 19
            "U#     BBBBBBBBBBBB   #       #       #UU#     BBBBBBBBBBBB   #       #       #UU#     BBBBBBBBBBBB   #       # BBBBBB#U\n"+   // 20
            "U#      #             # B     #       #UU#      #             # B     #       #UU#      #             # B     #       #U\n"+   // 21
            "U#  BBBB#             # B     #       #UU#  BBBB#             # B     #       #UU#  BBBB#             # B     # UUUUU #U\n"+   // 22
            "U#     B#             # B     #       #UU#     B#             # B     #       #UU#     B#             # B     # UUUUU #U\n"+   // 23
            "U#BBBB B#_______#   BBBBBBBBB #       #UU#     B#_______#   BBBBBBBBB #       #UU#     B#_______#   BBBBBBBBB #       #U\n"+   // 24
            "U#     B#       #             #       #  #     B#       #             #       #  #     B#       #             BBBBBB  #U\n"+   // 25
            "U# UUUUB#       #             #       #UU#   M B#       #     BBB     #       #UU#     B#       #             #       #U\n"+   // 26
            "U#  #   #      B#    UUUUUU   #     # #UU# #    #      B#     BBB     #     # #UU# #    #      B#UUUUBBUUUUUU #  B  # #U\n"+   // 27
            "UBBB#   #      B#             #     #BBUUBB#    #      B#             #     #BBUUBB#    #      B#          M  #     #BBU\n"+   // 28
            "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU",      // 29
    },
    {
        map: 
            "UUUUUUU                           UUUUUUUUUUUU                            UUUUUUUUUUUU                           UUUUUUU\n"+   // 0
            "UUUU                                UUUUUUUU                                UUUUUUUU                               UUUUU\n"+   // 0
            "UUU     #_____________#              UUUUUU     #_____________#              UUUUUU     #_____________#              UUU\n"+   // 1
            "U#  $   #             #               #  #      #             #               #$ #      #             #               #U\n"+   // 2
            "U#BBBBBB#             #_______#       #UU#BBBBBB#   BBBBBB    #_______#BBBBBB #UU#      #             #_______#       #U\n"+   // 3
            "U#      #UUUUUUUUU    #       # M $   #UU#      #   BBBBBB    #       #   $   #UU#      #BBBBBBBBBB   #       #   $   #U\n"+   // 4
            "U#      #            BBB      #BBBBBBB#UU#      #   BB  BB   BBB M    #       #UU#BBBBBB#            BBB      #BBBBBBB#U\n"+   // 5
            "U#BBBB  #   BBBBBBBB    BBBBBB#       #UU#      #   B    B            #       #UU#      #         M           #       #U\n"+   // 6
            "U#    #B#_____________________#       #UU#     B#_____________________#       #UU#     B#_____________________#  BBB  #U\n"+   // 7
            "U#    #B#         #UU# #UU#   #       #UU#     B#                     #       #UU#     B#                     #  BBB  #U\n"+   // 8
            "U# UUUUU#     H   #UBBBBBU#   #   $   #UU#     B#    #BBBBBB#    M    #   $   #UU#     B#                     #       #U\n"+   // 9
            "U#     B#         #UBBBBBU#   # #BBB# #UU#     B#  #B#  $BBB#         # #BBB# #UU#     B#BBBBBBBBBBBBBBBBBBBBB#  BBB  #U\n"+   // 10
            "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU",      // 29
    },
];