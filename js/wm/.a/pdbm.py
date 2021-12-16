# -*- coding: utf-8 -*-
""" @author:  _-=<( // ( Xiana Victoria Laor ) \\ )>=-_ """
from quaternion import Quaternion as Q
import hashlib as hl
from math import  pi, sqrt, asin, cos, radians, sin, acos
from vector import *
from gradients import CG
from numpy import linspace

### ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
##### ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
### ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#started from https://ru.wikipedia.org/wiki/Квантовый_компьютер
#http://www.mathprofi.ru/sobstvennye_znachenija_i_sobstvennye_vektory.html
#https://docs.scipy.org/doc/numpy/reference/generated/numpy.linalg.eig.html


class langop(object):

    'Class to operate on alphabet`s combinations and values'

    dwo = {
        'waer': {
            'rs': "ʎͱϯqΛpչըmϙIСВНOƑϣϵʞdψΞʀѦЬ⊔⊥էТᴥΔփ∏Y=Ӻϟˉ",
            'rl': "эыьязаъмюгктвущбоРшлсёржйпхеиВдцнЭЫЪФ-",
            'rv': [i*12**j for j in range(0, 3) for i in range(1, 12)]
        },
        'heba': {
            'rs': "abgdhvzxtiklmnsopcqrSTKMNPC",
            'rl': ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ", "ק", "ר", "ש", "ת", "ך", "ם", "ן", "ף", "ץ"],
            'es': ["lP", "iT", "ml", "lT", "i", "v", "in", "iT", "iT", "vd", "P", "md", "iM", "vN", "mK", "iN", "i", "di", "vP", "iS", "iN", "v", "P", "iM", "vN", "i", "di"],
            'rv': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
        'tqab': {
            'rs': "ilchxtypajwogzbfsmnerqvkdu#",
            'rv': [0, 1, 2, 3, 6, 9, 18, 4, 5, 7, 8, 10, 11, 19, 20, 12, 15, 21, 24, 13, 14, 16, 22, 17, 23, 25, 26]
        }
    }
    G = None

    def __init__(self, reda='heba', xer1=22, akx1=0):
        """ akx1 is start here ))  """
        # print("inits langop")
        self.xer1 = xer1
        self.reda = reda
        self.rs = self.dwo[self.reda]['rs'][akx1:akx1+xer1]
        self.rv = self.dwo[self.reda]['rv'][akx1:akx1+xer1]
        self.rakx1 = self.rs[akx1]
        if reda == 'heba':
            # reverse lists
            self.es = list(self.rs[::-1])
            self.ev = list(self.rv[::-1])
        else:
            self.es = list(self.rs)
            self.ev = list(self.rv)
        if 'es' in self.dwo[self.reda]:
            self.es = self.dwo[self.reda]['es'][akx1:akx1+xer1][::-1]
            self.ev = []
            for el in self.es:
                val = 0
                for elem in el:
                    ptr = self.dwo[self.reda]['rs'].find(elem)
                    if ptr >= 0:
                        val += self.dwo[self.reda]['rv'][ptr]
                self.ev.append(val)
        ar = []
        for i in range(xer1):
            for j in range(xer1):
                # print ((i, j))
                ar.append(self.rv[i] + self.ev[j])
        self.vmax = max(ar)

    def smod(self, num):
        pexjc = 0
        exk = 1
        for i in range(0, num):
            if pexjc == self.xer1:# - 1:
                exk = -1
            if pexjc == 0:
                exk = 1
            pexjc += exk
        return pexjc

    def lpair(self, a, t):
        'pair of letters or letter+ending'
        return self.rs[self.smod(a)] + self.es[self.smod(t)]

    def lpval(self, a, t):
        'pair value'
        return self.rv[self.smod(a)] + self.ev[self.smod(t)]

    def lettr(self, num):
        return self.rs[self.smod(num)]

    def ending(self, num):
        return self.es[self.smod(num)]

    def letval(self, num):
        return self.rv[self.smod(num)]

    def endval(self, num):
        return self.ev[self.smod(num)]



class DBMΘеgξ(object):

    def __init__(self, I=1, ξer1=22, add=22):
        self.I = I #distance between foci
        self.ξer1 = ξer1 #q. of circles on one focus, i.e. letters of alphabet
        self.X2 = ξer1 + add
        self.Na = 42 #q. of dots, while drawing a circle
        self.Ω = 1. / self.Na**9
        self.vO = vector(0, 0, 0)
        self._aa = 0 #which axis is A
        self._ta = 2 #which axis is T
        self._ua = 1 #upper axis
        self.Wyan = {}

    def smod(self, no):
        peξθ = 0
        exk = 1
        for i in range(0, no):
            if peξθ == self.ξer1 - 1: exk = -1
            if peξθ == 0: exk = 1
            peξθ += exk
        return peξθ

    def vlen(self, d0, d1):
        """our vector length"""
        # print "d1x-d0x:{}".format(d1.x - d0.x)
        return sqrt((d1.x - d0.x)**2 + (d1.y - d0.y)**2 + (d1.z - d0.z)**2)

    def iset(self, Yaan):
        """delete object by name"""
        del self.Wyan[Yaan]

    def yaan(self, string):
        """ MD5 name of an object """
        return hl.md5(string.encode('utf-8')).hexdigest()

    def enk(self, dot, angle, axis):
        """ Rotate """
        q = Q(axis=axis.arr, radians=angle)
        ret = q.rotate(dot.arr)
        return vector(ret[0], ret[1], ret[2])


### ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
##### ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
### ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class DBMFlt(DBMΘеgξ):

    def __init__(self, I=1, ξer1=22, add=22):
        """ Add param asks if we want some steps to I2
        On I2 we add add-1 steps for the line to finish before next focus
        so the first and the last dots may start their new DBMs, or even one for both
        """
        # scene.background = color.gray(.9)
        DBMΘеgξ.__init__(self, I=I, ξer1=ξer1, add=add)
        self.Mok1 = self.I / (self.ξer1 - 1)
        self.vA = vector(-self.I/2, 0, 0)
        self.vT = vector(self.I/2,  0, 0)
        self.vD = vector(0,    0, self.I)

    def e(self, a, t):
        """ Intersection point """
        ret = None
        ar = self.Mok1 * a
        tr = self.Mok1 * t
        hp = (self.I + ar + tr) / 2 # half perimeter
        if a + t >= self.ξer1 - 1:
            hI = 0; x = 0; coef = 1
            #just floating point problems arise with value < 0, fo fuck it up
            try: hI = (2 * sqrt(hp * (hp - self.I) * (hp - ar) * (hp - tr))) / self.I
            except: pass #https://stackoverflow.com/questions/21553327/why-is-except-pass-a-bad-programming-practice
            if tr >= ar: #how to shortly overcome problems with 90-angle. Comment this "if" out and see, what happens )
                ar, tr = [tr, ar]
                coef = -1
            sina = 0
            if ar != 0:
                sina = hI / ar
            an = asin(sina)
            sx = ar * cos(an) #length of adjacent catet
            x = coef * (-self.I) / 2 + coef * sx
            ret = vector(x, hI, 0) + self.vO
        return ret

    def ezje(self, a, t):
        """ Exists such dot or not? """
        if a + t >= self.ξer1 - 1:
            if a + t <= self.ξer1*2 - 2:
                return True
        return False

    def erxo(self, d0, d1):
        """ Find middle point, eroc xuw O, point of XO, namely 'between' """
        # print d0
        mp = vector(d0)
        dd0, dd1 = [vector(d1), vector(d0)]
        if d0 > d1:
            dd0, dd1 = [vector(d1), vector(d0)]
        mp = vector((dd1 - dd0) / 2)
        return mp

    def k(self, d0, d1):
        """ Make a line """
        if d0 is None or d1 is None: raise Exception("Nonexisting dot passed!")
        # print ("Vector \td0:{}\n\td1: {}".format(d0, d1))
        # print (d0)
        dx = (d1.x - d0.x) / (self.Na // 2)
        dy = (d1.y - d0.y) / (self.Na // 2)
        dz = (d1.z - d0.z) / (self.Na // 2)
        ps = []
        Yaan = "kw_" + self.yaan(str([d0, d1]))
        for s in range(0, (self.Na // 2) + 1):
            ps.append(vector(d0) + s * vector(dx, dy, dz))
        self.Wyan[Yaan] = {
            'ps':ps,
            'd0':d0,
            'd1':d1
        }
        return Yaan

    def _mej_d(self, dot, foc):
        """ Information about the the angle of a dot for focus foc"""
        nd = dot - foc - self.vO
        hypl = nd.mag # distance between focus and a dot
        ang = acos(nd.x / hypl)
        return ang

    def u(self, d0, d1, foc):
        """draw an arc for a given focus between d0 and d1 with radius correction in case of difference"""
        if d0 is None or d1 is None: raise Exception("Nonexisting dot passed!")
        a0 = self._mej_d(d0, foc)
        a1 = self._mej_d(d1, foc)
        dr0 = self.vlen(foc, d0)
        dr1 = self.vlen(foc, d1)
        deltaA = a1 - a0
        dA = deltaA / self.Na
        deltaR = dr1 - dr0
        dR = deltaR / self.Na
        dmR = dR / dr0 #step of multiplier of vector: on each step we gonna multiply
        ps = []; sd = vector(d0 - foc) #starting point, like focus is vO
        for i in range(0, self.Na + 1):
            ps.append(vector(sd + foc)) #add vector, shifted by focus, since all the calculations are from vO
            sd = self.enk(sd, dA, self.vD)
            sd = sd * (1 + dmR) #raise vector by multiplier increment
        name = "uxj_" + self.yaan(str([d0, d1, foc]))
        self.Wyan[name] = {
            'ps': ps,
            'd0': d0,
            'd1': d1,
            'sangle': a0,
            'eangle': a1,
            'axis': foc
        }
        return name

### ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
##### ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
### ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class DBMFltPath(DBMFlt):
    """
    Class, describing groups of dots of DBM and path handling using
    trinary language, describing changing focused-circle number, "pathlang", consisting of 2digit pathwords
    exports one line-drawing, not done in dafW - _o1mok1(), drawing diagonals smoothly
    """

    PathConsts = {
        # 0 doesn't shine
        '4d__': "0- -0 0+ +0", #regular group - in both Is
        ###############
        # e1 shines (connects to closests on bA), on I1 1e-dots are w/out grandchildren (He-sofits)
        'e1I1': "0- -+ +0", #first ellipse groups, going first towards T-focus (A -> T)
        ###############
        # e1 out of I1 becomes BA, which can be traced geometrically, joining dots of 1eI1 and
        # continuing the lines
        # smoothily to out-of-I1BA (or towards vA). Note that 1e, going BA, divides by direction
        'bAI2': "0- -0 ++", #"+0 0+ --", #no 1e on I2: BA from A out
        'bTI2': "-0 0- ++", #no 1e on I2: BA from T out
        ###############
        # TODO: write functions for smoothing lines - between angles between dots of arcs
        '3uI1': "",
        '3uI2': "",
        '3dI1': "",
        '3dI2': "",
        '3rI1': "",
        '3rI2': "",
        '3lI1': "",
        '3lI2': "",
    }

    def __init__(self, ξer1=5, add=5, I=1):
        DBMFlt.__init__(self, ξer1=ξer1, add=add, I=I)
        self.W = self.wyanω() #group information - dict {(a, t): names of groups' lines}

    def ϒrkωmpeξθ(self, peξθ):
        """ Function for checking the validity of the path """
        for i in range(0, len(peξθ)):
            if i%2 == 0: # just check the dots for the unexistants
                a, t = peξθ[i]
                if self.e(a, t) is None:
                    return False
        return True

    def Y_wян(self, a, t):
        """ Draw one Wyan """
        if a == 0 or t == 0: #foci do not shine at all, neither in I1 nor in I2
            pass
        else:
            path = self.PathConsts['4d__']
            if a + t == self.ξer1 - 1: #just I1  base axis, so no group at all
                raise Exception("No groups on I1BA for {}:{}".format(a, t))
            elif a + t == self.ξer1: #first ellipse, we need other pthword
                path = self.PathConsts['e1I1']
            elif a >= self.ξer1 or t >= self.ξer1: #I2
                l = min((a, t))
                h = max((a, t))
                if h - l <= self.ξer1 - 1: # I2
                    if h - l == self.ξer1 - 1: #BAI2
                        if a > t:
                            path = self.PathConsts['bTI2']
                        else:
                            path = self.PathConsts['bAI2']
                    else: #4-dots-group
                        path = self.PathConsts['4d__']
                else: #no intersections may exist
                    return None
            p = self.peξθ(a, t, path)
            # print(p)
            #returns name of the group's arrays of points of each uxsa (arc)
            return self.åIå(p)
        return None

    def åIå(self, peξθ):
        """ Draw path's lines, or just get a list of arcs, comprising group
            Returns name of a group of dots of the path
        """
        if self.ϒrkωmpeξθ(peξθ) == False: return
        gnam = "path_" + self.yaan(str(peξθ))
        self.Wyan[gnam] = []
        for i in range(1, len(peξθ) + 1):
            if i % 2 == 1: #here we have pathcode and the starting dot one item back
                a = peξθ[i-1][0]
                t = peξθ[i-1][1]
                # straight = False
                # midpoint = None
                d0 = self.e(a, t)
                arr = [a, t]
                for c in range(0, len(peξθ[i])): #get next dot according to pathword
                    if peξθ[i][c] == '+':
                        arr[c] += 1
                    elif peξθ[i][c] == '-':
                        arr[c] -= 1
                d1 = self.e(arr[0], arr[1])
                # print arr, d1
                index = peξθ[i].find('0')
                foci = [self.vA, self.vT]
                if index >= 0: #normal uxjsan from axes
                    name = self.u(d0, d1, foci[index])
                else: #if no 0s in
                    name = self.k(d0, d1)
                self.Wyan[gnam] += self.Wyan[name]['ps']
                # pass
        return gnam

    def peξθ(self, a, t, pathcode):
        """ Get a list of dots, alternating with the parts of peξθ's param string commands """
        pa = pathcode.split()
        path = []
        for f in pa:
            path.append((a, t))
            s = {
                "0-": (a, t-1),
                "0+": (a, t+1),
                "-0": (a-1, t),
                "+0": (a+1, t),
                "-+": (a-1, t+1),
                "+-": (a+1, t-1),
                "--": (a-1, t-1),
                "++": (a+1, t+1)
            }
            a, t = s[f]
            path.append(f)
        return path

    def wyanω(self):
        """
        Returns all groups of the DBM in the dict, where a key is a tuple (a, t) of a group
        and the value is name (key for obj in self.Wyan) of the array of lines of dots of each group
        """
        all_groups_names = {}
        limit = self.ξer1 - 1
        if self.X2 != self.ξer1:
            limit = self.X2 - 1
        for i in range(0, limit):
            for j in range(0, limit):
                if i + j >= self.ξer1:
                    all_groups_names[(i, j)] = self.Y_wян(i, j)
        return all_groups_names

    def _bjerω(self, a, t, pathword):
        """
        Returns pair of right and left dots for each type of diagonal movement
        Points need to be checked for existance
        """
        # if a + t == self.S.c.ξer1 - 1: return None #no gates for I1 BA
        p = {'++': "+0 0+", '--': "-0 0-", '+-': "+0 0-", '-+': "-0 0+"}[pathword].split()
        p.append(pathword)
        ret = []
        for v in range(len(p)):
            ar = [a, t]
            f = p[v]
            for u in range(len(f)):
                if f[u] == '+':
                    ar[u] += 1
                elif f[u] == '-':
                    ar[u] -= 1
            ret.append(ar)
        return ret

    def wyan_erω(self, a, t):
        """ Returns list of dots for a given wyan """
        nm = self.W[(a, t)]
        res = None
        if nm is not None:
            res = self.Wyan[nm]
        return res

### ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
##### ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
### ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class DBMSph(DBMΘеgξ):

    def __init__(self, I=1., ξer1=22):
        DBMΘеgξ.__init__(self, ξer1=ξer1, add=0, I=I)
        self.vA = vector(1, 0, 0)
        self.vT = vector(0, 0, 1)
        self.vD = vector(0, 1, 0)
        self.Ϛel = pi# + self.Ω
        self.Mok1 = self.Ϛel / (ξer1-1)

    def ç_info(self, n):
        """ Information about the path (circle);  Odd: middle is (ξer1-1)/2 ||| Even: middles are (ξer1-1)/2; (ξer1+1)/2 """
        # xym = (self.ξer1 - 1) / 2  # xy-mirror XD
        # oldn = n
        # if oldn > xym:
        #     n = self.ξer1 - oldn
        ang = 0
        if isinstance(n, int):
            # print("dwo_jjit, n passed as int")
            ang = self.Mok1 * n
        elif isinstance(n, float):
            # print("dwo_jjit, n passed as float")
            ang = n
        shift = self.I * cos(ang)
        radius = self.I * sin(ang)
        if radius == 0.:
            radius = self.Ω
        return [radius, shift]

    def e(self, a, t, sign=1):
        """ Intersection point """
        ajr, ajs = self.ç_info(a)
        tjr, tjs = self.ç_info(t)
        arise = 0
        if ajr > self.Ω:
            cAng = tjs / ajr
            angle = acos(cAng)
            arise = sign * ajr * sin(angle)
        return vector(ajs, arise, tjs) + self.vO

    def k(self, d0, d1):
        """ Mark a line by points """
        dx = (d1.x - d0.x) / (self.Na // 2)
        dy = (d1.y - d0.y) / (self.Na // 2)
        dz = (d1.z - d0.z) / (self.Na // 2)
        ps = []
        name = "kw_" + self.yaan(str([d0, d1]))
        for s in range(0, (self.Na // 2) + 1):
            ps.append((vector(d0) + s * vector(dx, dy, dz)).arr)
        self.Wyan[name] = {
            'ps': ps
        }
        return name

    def u(self, d0, d1):
        """ Make an arc """
        name = "Ar_" + self.yaan(str([d0, d1]))
        axis = d0.cross(d1)
        coef = 1
        if d0.arr[self._aa] == d1.arr[self._aa]: #case of rotation about x axis
            axis = self.vA
            d01 = vector(0, d0.y, d0.z)
            d11 = vector(0, d1.y, d1.z)
            dsc = d01.dot(norm(d11)) / d01.mag
            if d01.arr[self._ua] < d11.arr[self._ua]:
                coef = -1
        elif d0.arr[self._ta] == d1.arr[self._ta]: #case of rotation about z axis
            axis = self.vT
            d01 = vector(d0.x, d0.y, 0)
            d11 = vector(d1.x, d1.y, 0)
            dsc = d01.dot(norm(d11)) / d01.mag
            if d01.arr[self._ua] > d11.arr[self._ua]:
                coef = -1
        else:    #case of rotation about vO (center)
            # cos of angle is scalar projection of d0 on d1 over hypotenuse(magnitude of d0 (== 1.))
            dsc = d0.dot(norm(d1)) / d0.mag
            dsa = acos(dsc)
            da = dsa / self.Na
            ps = []

        for i in range(0, self.Na+1):
            ps.append(self.enk(d0, angle=coef*da*i, axis=axis).arr)
        self.Wyan[name] = {
            'ps': ps,
            'd0': d0,
            'd1': d1,
            'axis': axis,
            'angle': dsa
        }
        return name

    def ç(self, n, z=1):
        """ Make a circle. If n is float, will draw the float radius, not just by number of circle, so the func may be used to draw at any AT-plane-angle """
        radius, shift = self.ç_info(n)
        axis = self.vA
        axs = self._aa
        coef = 1
        if z == 1:
            axis = self.vT
            axs = self._ta
            coef = -1
        pref = "A"
        if z == 1:
            pref = "Z"
        name = pref + str([n, z])
        pos = axis.arr
        pos[axs] = shift
        pos[self._ua] = radius
        pos = vector(pos[0], pos[1], pos[2])
        ps = []        # points of the circle
        Ϛit = (pi * 2) + self.Ω
        for an in linspace(0, Ϛit, self.Na):
            ps.append(self.enk(pos, angle=coef * an, axis=axis).arr)
        self.Wyan[name] = {
            'ps': ps,
            'n': n,
            'z': z,
            'axis': axis,
            'axs': axs
        }
        return name

def tmp0(self):
            pass
            #flattened = [val for sublist in list_of_lists for val in sublist]
            # =
            # from itertools import chain
            # list(chain.from_iterable([[180.0], [173.8], [164.2], [156.5], [147.2], [138.2]]))
            #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            # >>> lis=[[180.0], [173.8], [164.2], [156.5], [147.2], [138.2]]
            # >>> [x[0] for x in lis]
            # [180.0, 173.8, 164.2, 156.5, 147.2, 138.2]
