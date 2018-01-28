#!/usr/bin/env python3

# pylint: disable = bad-whitespace
# pylint: disable = invalid-name
# pylint: disable = missing-docstring

# --------
# StrEq.py
# --------

if __name__ == "__main__" : # pragma: no cover
    print("StrEq.py")
    assert     streq("",    "")
    assert     streq("abc", "abc")
    assert not streq("abc", "aba")
    assert not streq("aba", "abc")
    assert not streq("abc", "ab")
    assert not streq("ab",  "abc")
    print("Done.")
